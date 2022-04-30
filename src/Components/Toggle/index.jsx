import { memo } from 'react'

// styles
import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel
} from './styled'

export const Toggle = memo(() => {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" onClick={() => window.swapTheme()} />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  )
})