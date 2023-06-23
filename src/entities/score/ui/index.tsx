import { FC } from 'react'
import { Line, Points, Wrapper } from './styles'

// ATTENTION: don't move this to entity/score, because it's UI type
type Props = {
  currentPlayerPoints: number
  opponentPlayerPoints: number
}

export const Score: FC<Props> = ({ currentPlayerPoints, opponentPlayerPoints }) => {
  return (
    <Wrapper>
      <Points>{currentPlayerPoints}</Points>
      <Line>-</Line>
      <Points>{opponentPlayerPoints}</Points>
    </Wrapper>
  )
}
