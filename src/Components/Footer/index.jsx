import { memo, useContext } from 'react'
import { ThemeContext  } from 'styled-components'
import { useTranslation } from 'react-i18next'

// components
import {
  Toggle,
  Language
} from 'uikit'

// styles
import {
  Wrapper,
  ToggleBlock,
  ToggleText
} from './styled'

export const Footer = memo(() => {

  const themeContext = useContext(ThemeContext)
  const { t, i18n } = useTranslation()

  return (
    <Wrapper>
      <ToggleBlock>
        <Toggle />
        <ToggleText>{t(themeContext.theme)}</ToggleText>
      </ToggleBlock>
      <Language/>
    </Wrapper>
  )
})