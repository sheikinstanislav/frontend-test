import { FC } from 'react'
import { Line, Points, Wrapper } from './styles'

type Props = {
  score: {
    currentPlayerPoints: number
    opponentPlayerPoints: number
  }
}

export const Score: FC<Props> = ({ score }) => {
  return (
    <Wrapper>
      <Points>{score.currentPlayerPoints}</Points>
      <Line>-</Line>
      <Points>{score.opponentPlayerPoints}</Points>
    </Wrapper>
  )
}
