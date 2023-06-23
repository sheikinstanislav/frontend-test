import { useStore } from 'effector-react'
import { FC } from 'react'
import { Element } from '~/entities/element'
import { ElementType } from '~/shared/types'
import { $choosedElement } from '../model'
import { ElementButton, ElementWrapper, Heading } from './styles'


// 
interface Props {
  handleElementChoice: (el: ElementType) => void
}

export const ChooseElement: FC<Props> = ({ handleElementChoice }) => {
  const choosedElement = useStore($choosedElement)

  return (
    <>
      <Heading>{choosedElement === 'none' ? 'Choose element' : 'You choosed:'}</Heading>

      <ElementWrapper>
        <ElementButton onClick={() => handleElementChoice('rock')}>
          <Element elementType="rock" />
        </ElementButton>
        <ElementButton onClick={() => handleElementChoice('paper')}>
          <Element elementType="paper" />
        </ElementButton>
        <ElementButton onClick={() => handleElementChoice('scissors')}>
          <Element elementType="scissors" />
        </ElementButton>
      </ElementWrapper>
    </>
  )
}
