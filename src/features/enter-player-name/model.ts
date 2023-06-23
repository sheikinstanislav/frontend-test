import { createEvent, createStore, sample } from 'effector'
import { playerModel } from '~/entities/player'

export const nameChanged = createEvent<string>()
export const nameConfirmed = createEvent()

const $inputedName = createStore<string>('')

sample({
  clock: nameChanged,
  target: $inputedName,
})

sample({
  clock: nameConfirmed,
  source: $inputedName,
  fn: (name) => name,
  target: playerModel.nameChanged,
})
