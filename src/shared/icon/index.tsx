import { SVGProps } from 'react'
import { icons } from './const'
import { IconName } from './types'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  width?: number
  height?: number
  color?: string
  strokeWidth?: number
}

export const Icon = ({ name, ...params }: IconProps): JSX.Element | null => {
  const Icon = icons[name]
  return <Icon {...params} />
}
