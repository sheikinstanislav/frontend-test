import { createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'
import { playerModel } from '~/entities/player'
import { scoreModel } from '~/entities/score'
import { chooseElementModel } from '~/features/choose-element'
import { GameStatusType, ResultResponse, ResultType } from '~/shared/types'

export const defineRoundResult = (
  currentUser: string,
  roundResult: ResultResponse,
): ResultType => {
  const { results } = roundResult
  const currentPlayerChoice = results.find(
    ({ username }) => username === currentUser,
  )?.choice
  const opponentChoice = results.find(({ username }) => username !== currentUser)?.choice
  if (currentPlayerChoice === opponentChoice) return 'tie'
  
  if (
    (currentPlayerChoice === 'paper' && opponentChoice === 'rock') ||
    (currentPlayerChoice === 'rock' && opponentChoice === 'scissors') ||
    (currentPlayerChoice === 'scissors' && opponentChoice === 'paper')
  )
    return 'win'
  return 'loss'
}

export const gameStarted = createEvent()
export const gameFinished = createEvent<ResultResponse>()
export const gameStopped = createEvent()
export const roundResultDefined = createEvent<ResultType>()

export const $gameStatus = createStore<GameStatusType>('waiting for opponent')
export const $roundResult = createStore<ResultType | null>(null)

$gameStatus.on(gameStarted, () => 'game started').on(gameFinished, () => 'game finished')

$roundResult.on(roundResultDefined, (_, value) => value)

sample({
  clock: playerModel.opponentConnected,
  target: gameStarted,
})

sample({
  clock: playerModel.opponentDisconnected,
  target: [gameStopped, scoreModel.scoreReset, chooseElementModel.choosedElementReset],
})

sample({
  clock: gameStarted,
  target: [playerModel.newRoundStarted],
})

sample({
  clock: gameFinished,
  source: playerModel.$user,
  fn: defineRoundResult,
  target: [roundResultDefined, scoreModel.scoreChanged],
})

sample({
  clock: gameFinished,
  target: [playerModel.playersChoiceDefined, chooseElementModel.choosedElementReset],
})

reset({
  clock: gameStopped,
  target: $gameStatus,
})

reset({
  clock: [gameStarted, gameStopped],
  target: $roundResult,
})
