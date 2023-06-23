import { createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'
import { playerModel } from '~/entities/player'
import { ElementType } from '~/shared/types'

// Read more - https://softcery.slack.com/archives/C02HHHCERNZ/p1670226155639429
export const newElementChoosed = createEvent<ElementType>()
export const choosedElementReset = createEvent()

export const $choosedElement = createStore<ElementType | 'none'>('none')

sample({
  clock: newElementChoosed,
  target: $choosedElement,
})

sample({
  clock: newElementChoosed,
  target: playerModel.currentPlayerMadeChoice,
})

// TODO: add choose element effect in which we will send request to websocket
reset({
  clock: choosedElementReset,
  target: $choosedElement,
})
