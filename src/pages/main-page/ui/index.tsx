import { FC } from 'react'
import { GameField } from '~/widgets/game-field/ui'
import { GameInfo } from '~/widgets/game-info'
import { useSocket } from '../model'

// перенести цей в entity/player
type Props = {
  currentUser: string
}

export const MainPage: FC<Props> = ({ currentUser }) => {
  const sendChoice = useSocket(currentUser)

  return (
    <>
      <GameInfo />
      {/* переносимо всю логіку з GameField на рівень сторінки, відмовляємось від додаткового віджета */}
      <GameField sendChoice={sendChoice} />
    </>
  )
}
