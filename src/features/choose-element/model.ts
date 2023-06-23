import { createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'
import { playerModel } from '~/entities/player'
import { ElementType } from '~/shared/types'

export const newElementChoosed = createEvent<ElementType>()
export const choosedElementReset = createEvent()

export const $choosedElement = createStore<ElementType | 'none'>('none')

$choosedElement.on(newElementChoosed, (_, value) => value)

sample({
  clock: newElementChoosed,
  target: playerModel.currentPlayerMadeChoice,
})

reset({
  clock: choosedElementReset,
  target: $choosedElement,
})
