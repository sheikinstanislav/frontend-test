import { useCallback, useEffect, useRef } from 'react'
import { Socket, io } from 'socket.io-client'
import { playerModel } from '~/entities/player'
import { ElementType } from '~/shared/types'
import { gameFieldModel } from '~/widgets/game-field'

const BASE_URL = 'http://localhost:4000'
interface ServerEvents {
  connected: (arg: { username: string }) => void
  disconnected: () => void
  players_received: (players: string[]) => void
  opponent_made_choice: () => void
  game_finished: (result: {
    results: [{ username: string; choice: ElementType }]
  }) => void
}

interface ClientEvents {
  choose: (arg: ElementType) => void
  get_players: () => void
}

export type SocketType = Socket<ServerEvents, ClientEvents>

export function useSocket(userName: string) {
  const socketRef = useRef<SocketType>()

  useEffect(() => {
    const socket = io(BASE_URL, {
      query: {
        username: userName,
      },
    })
    socketRef.current = socket
    socketRef.current.emit('get_players')
    socketRef.current.on('connected', playerModel.opponentConnected)
    socketRef.current.on('disconnected', playerModel.opponentDisconnected)
    socketRef.current.on('players_received', (players: string[]) => {
      return players.length > 1
        ? playerModel.opponentConnected({
            username: players.filter((player) => player !== userName)[0],
          })
        : null
    })
    socketRef.current.on('game_finished', gameFieldModel.gameFinished)
    socketRef.current.on('opponent_made_choice', playerModel.opponentMadeChoice)
  }, [userName])

  const sendChoice = useCallback(
    (choosedElement: ElementType) => socketRef.current?.emit('choose', choosedElement),
    [],
  )
  return sendChoice
}
