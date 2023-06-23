import { FC } from 'react'
import { GameField } from '~/widgets/game-field/ui'
import { GameInfo } from '~/widgets/game-info'
import { useSocket } from '../model'

type Props = {
  currentUser: string
}

export const MainPage: FC<Props> = ({ currentUser }) => {
  const sendChoice = useSocket(currentUser)

  return (
    <>
      <GameInfo />
      <GameField sendChoice={sendChoice} />
    </>
  )
}
