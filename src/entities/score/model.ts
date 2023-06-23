import { createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'
import { ResultType } from '~/shared/types'

export const scoreChanged = createEvent<ResultType>()
export const scoreReset = createEvent()

export const $score = createStore({ currentPlayerPoints: 0, opponentPlayerPoints: 0 })

// improve naming of variables (previousX, newX etc), implement this with https://effector.dev/docs/api/effector/split
sample({
  clock: scoreChanged,
  source: $score,
  fn: (previousScore, newScore) => {
    // store immutability
    if (newScore === 'win')
      return {
        ...previousScore,
        currentPlayerPoints: previousScore.currentPlayerPoints + 1,
      }
    else if (newScore === 'loss')
      return {
        ...previousScore,
        opponentPlayerPoints: previousScore.opponentPlayerPoints + 1,
      }

    return previousScore
  },
  target: $score,
})

reset({
  clock: scoreReset,
  target: $score,
})
