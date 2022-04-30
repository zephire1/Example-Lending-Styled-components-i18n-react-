import { memo } from 'react'
import { useTranslation } from 'react-i18next'

// styles
import {
  List,
  Item
} from './styled'

export const NavBar = memo(() => {
  const { t, i18n } = useTranslation()
  return (
    <List>
      <Item>{t("woman")}</Item>
      <Item>{t("men")}</Item>
      <Item className="active">{t("all")}</Item>
    </List>
  )
})