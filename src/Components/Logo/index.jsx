import { memo } from 'react'

// styled
import {
  Wrapper,
  LogoWrapper,
  Text,
  BoldText
} from './styled'

// components
import {
  LogoIcon
} from 'uikit'

export const Logo = memo(() => {
  return (
    <Wrapper>

      <Text>your<BoldText>sneaker</BoldText></Text>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>

    </Wrapper>
  )
})