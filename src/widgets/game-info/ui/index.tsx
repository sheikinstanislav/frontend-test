import { useStore } from 'effector-react'
import { FC } from 'react'
import { PlayerWrapper, playerModel } from '~/entities/player'
import { Score, scoreModel } from '~/entities/score'
import { Wrapper } from './styles'

export const GameInfo: FC = () => {
  const currentPlayerName = useStore(playerModel.$currentPlayerName)
  const currentPlayerStatus = useStore(playerModel.$currentPlayerStatus)
  const opponentPlayerName = useStore(playerModel.$opponentPlayerName)
  const opponentPlayerStatus = useStore(playerModel.$opponentPlayerStatus)
  const score = useStore(scoreModel.$score)

  return (
    <Wrapper>
      <PlayerWrapper playerName={currentPlayerName} playerStatus={currentPlayerStatus} />
      <Score score={score} />
      <PlayerWrapper
        playerName={opponentPlayerName}
        playerStatus={opponentPlayerStatus}
      />
    </Wrapper>
  )
}
