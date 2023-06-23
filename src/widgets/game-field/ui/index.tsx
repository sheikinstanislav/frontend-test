import { useStore } from 'effector-react'
import { FC } from 'react'
import { Element } from '~/entities/element'
import { playerModel } from '~/entities/player'
import { ChooseElement, chooseElementModel } from '../../../features/choose-element'
import { ElementType } from '~/shared/types'
import { $gameStatus, $roundResult, gameStarted } from '../model'
import { Button, ElementsWrapper, Text, Wrapper } from './styles'

// move to src/features/choose-element/model
interface Props {
  sendChoice: (el: ElementType) => void
}

// remove props drilling and get sendChoice from feature/choose-element/model instead
export const GameField: FC<Props> = ({ sendChoice }) => {
  const gameStatus = useStore($gameStatus)
  const roundResult = useStore($roundResult)
  const opponentRoundChoice = useStore(playerModel.$opponentPlayerRoundChoice)
  const currentPlayerRoundChoice = useStore(playerModel.$currentPlayerRoundChoice)

  const handleElementChoice = (element: ElementType) => {
    sendChoice(element)
    chooseElementModel.newElementChoosed(element)
  }

  const gameResultText = {
    win: 'You win round',
    loss: 'You lost round',
    tie: 'Draw',
  }

  if (gameStatus === 'waiting for opponent')
    return <h4>Please, wait for opponent to join the game</h4>
  if (gameStatus === 'game started')
    return <ChooseElement handleElementChoice={handleElementChoice} />

  return (
    <Wrapper>
      {currentPlayerRoundChoice.roundChoice && opponentRoundChoice.roundChoice ? (
        <ElementsWrapper>
          <Element elementType={currentPlayerRoundChoice.roundChoice} />
          <Text>{roundResult && gameResultText[roundResult]}</Text>
          <Element elementType={opponentRoundChoice.roundChoice} />
        </ElementsWrapper>
      ) : (
        <Text>Waiting for result</Text>
      )}
      <Button type="button" onClick={() => gameStarted()}>
        Start new Round
      </Button>
    </Wrapper>
  )
}
