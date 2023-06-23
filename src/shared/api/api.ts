// shared/api.ts
import { createEffect, createEvent } from 'effector'
import * as io from 'socket.io-client'

export const start = createEvent()
// додати effect, який би конектився до сокета
const connectSocketFx = createEffect(() => {
  const socket = io.connect('http://192.168.88.120:3001')
  return socket
})
export const socket = io.connect('http://192.168.88.120:3001')

export function joinGameFx(gameId: string, playerName: string) {
  socket.emit('joinGame', { gameId, playerName })
}

export function makeChoiseFx(socket: any) {
  // socket.emit...
}

export function onPlayerJoinedFx() {
  // socket.on...
}

export function onGameFinishedFx() {}
// etc...

const service = {
  connectSocketFx,
  joinGameFx,
  makeChoiseFx,
}
