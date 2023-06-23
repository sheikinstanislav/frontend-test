import { createEvent, createStore } from 'effector'
import { reset } from 'patronum'
import { ResultType } from '~/shared/types'

export const scoreChanged = createEvent<ResultType>()
export const scoreReset = createEvent()

export const $score = createStore({ currentPlayerPoints: 0, opponentPlayerPoints: 0 })

$score.on(scoreChanged, (state, value) => {
  switch (value) {
    case 'win':
      return { ...state, currentPlayerPoints: state.currentPlayerPoints + 1 }
    case 'loss': {
      return { ...state, opponentPlayerPoints: state.opponentPlayerPoints + 1 }
    }
    default:
      return {
        ...state,
      }
  }
})

reset({
  clock: scoreReset,
  target: $score,
})
