import { memo } from 'react'

// components
import {
  Logo,
  NavBar,
  UserPanel
} from 'uikit'

// styles
import {
  Wrapper
} from './styled'

export const Header = memo(() => {
  return (
    <Wrapper>
      <NavBar/>
      <Logo/>
      <UserPanel/>
    </Wrapper>
  )
})