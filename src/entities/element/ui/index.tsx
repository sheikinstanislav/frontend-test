import { FC } from 'react'
import { Icon } from '~/shared/icon'
import { ElementType } from '~/shared/types'

const elements = {
  rock: <Icon name="rock" />,
  paper: <Icon name="paper" />,
  scissors: <Icon name="scissors" />,
}

type Props = {
  elementType: ElementType
}

export const Element: FC<Props> = ({ elementType }) => {
  const elementIcon = elements[elementType]

  return <div>{elementIcon}</div>
}
