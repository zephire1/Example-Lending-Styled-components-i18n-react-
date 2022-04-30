import { memo } from 'react'

// styles
import {
  Wrapper,
  Button
} from './styled'

// components
import {
  UserIcon,
  FindIcon,
  BagIcon
} from 'uikit'

export const UserPanel = memo(() => {
  return (
    <Wrapper>
      <Button><UserIcon /></Button>
      <Button><FindIcon /></Button>
      <Button><BagIcon /></Button>
    </Wrapper>
  )
})