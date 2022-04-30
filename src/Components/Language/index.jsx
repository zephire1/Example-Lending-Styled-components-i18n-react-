import { memo } from 'react'
import { useTranslation } from 'react-i18next'

// styles
import {
  Wrapper,
  Text
} from './styled'

export const Language = memo(() => {
  const { t, i18n } = useTranslation()

  const ChangeLang = (name) => {
    i18n.changeLanguage(name)
  }


  return (
    <Wrapper>
      <Text onClick={() => ChangeLang('en')} className={i18n.language === 'en' ? "active" : null}>EN</Text>
      <Text onClick={() => ChangeLang('ua')} className={i18n.language === 'ua' ? "active" : null}>UA</Text>
    </Wrapper>
  )
})