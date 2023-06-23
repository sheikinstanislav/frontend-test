import { FC } from 'react'
import { PlayerName, PlayerStatus } from '~/shared/types'
import { Name, Status, Wrapper } from './styles'

interface Props {
  playerName: PlayerName
  playerStatus: PlayerStatus
}

export const PlayerWrapper: FC<Props> = ({ playerName, playerStatus }) => {
  return (
    <Wrapper>
      <Name>{playerName.name}</Name>
      <Status>{playerStatus.status}</Status>
    </Wrapper>
  )
}
