import { createDomain, createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'
import { loadFromStorage, saveToStorage } from '~/shared/libs/domain'
import { PlayerName, PlayerStatus, ResultResponse, RoundChoice } from '~/shared/types'

const userDomain = createDomain()
loadFromStorage(userDomain, localStorage)
saveToStorage(userDomain, localStorage)

// Events
export const opponentConnected = createEvent<{ username: string }>()
export const opponentDisconnected = createEvent()
export const opponentMadeChoice = createEvent()
export const newRoundStarted = createEvent()
export const playersChoiceDefined = createEvent<ResultResponse>()
export const currentPlayerMadeChoice = createEvent()
export const nameChanged = createEvent<string>()

//User store
export const $user = userDomain.createStore<string>('')

//Opponent stores
export const $opponentPlayerName = createStore<PlayerName>({ name: 'Opponent' })
export const $opponentPlayerStatus = createStore<PlayerStatus>({ status: 'not in game' })
export const $opponentPlayerRoundChoice = createStore<RoundChoice>({
  roundChoice: null,
})

//Current player stores
export const $currentPlayerName = $user.map<PlayerName>((userName) => ({
  name: userName,
}))
export const $currentPlayerStatus = createStore<PlayerStatus>({ status: 'in game' })
export const $currentPlayerRoundChoice = createStore<RoundChoice>({
  roundChoice: null,
})

$user.on(nameChanged, (_, newName) => newName)

// sample({
//   clock: opponentConnected,
//   source: $playerName,
//   fn: (state, value) => ({ ...state, name: value.username }),
//   target: $playerName,
// })

// sample({
//   clock: opponentConnected,
//   source: { $playerName, $playerStatus },
//   fn: (state) => ({ ...state, status: 'in game' }),
//   target: $playerStatus,
// })

// sample({
//   clock: playersChoiceDefined,
//   source: { $playerName, $roundChoice },
//   fn: (playerName, { results }) => ({
//     roundChoice: results.filter(
//       ({ username }) => username === playerName.$playerName.name,
//     )[0]?.choice,
//   }),
//   target: $roundChoice,
// })

//Opponent events
$opponentPlayerName.on(opponentConnected, (_, value) => ({ name: value.username }))

$opponentPlayerStatus
  .on(opponentConnected, (state) => ({
    ...state,
    status: 'in game',
  }))
  .on(opponentMadeChoice, (state) => ({
    ...state,
    status: 'made choice',
  }))
  .on(playersChoiceDefined, (state) => ({
    ...state,
    status: 'in game',
  }))

sample({
  clock: playersChoiceDefined,
  source: { $opponentPlayerName, $opponentPlayerRoundChoice },
  fn: (opponentPlayerName, { results }) => ({
    roundChoice: results.filter(
      ({ username }) => username === opponentPlayerName.$opponentPlayerName.name,
    )[0]?.choice,
  }),
  target: $opponentPlayerRoundChoice,
})

$opponentPlayerRoundChoice.on(newRoundStarted, (state) => ({
  ...state,
  roundChoice: null,
}))

reset({
  clock: opponentDisconnected,
  target: [$opponentPlayerName, $opponentPlayerStatus, $opponentPlayerRoundChoice],
})

//Current player events
$currentPlayerStatus
  .on(currentPlayerMadeChoice, (state) => ({
    ...state,
    status: 'made choice',
  }))
  .on(playersChoiceDefined, (state) => ({
    ...state,
    status: 'in game',
  }))

$currentPlayerRoundChoice.on(newRoundStarted, (state) => ({
  ...state,
  roundChoice: null,
}))

sample({
  clock: playersChoiceDefined,
  source: { $currentPlayerName, $currentPlayerRoundChoice },
  fn: (currentPlayerName, { results }) => ({
    roundChoice: results.filter(
      ({ username }) => username === currentPlayerName.$currentPlayerName.name,
    )[0]?.choice,
  }),
  target: $currentPlayerRoundChoice,
})
