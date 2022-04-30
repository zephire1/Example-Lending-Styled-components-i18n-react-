import { memo } from 'react'

// styles
import {
  Wrapper,
  PageText,
  SwapButton
} from './styled'

// Icons
import {
  ArrowIcon
} from 'uikit'

export const Swaper = memo(({slide, maxSlides, next, prev}) => {
  let topClass = ["rotate"];
  let bottomClass = [];

  if (slide===1) topClass.push('hide')
  if (slide===maxSlides) bottomClass.push('hide')

  return (
    <Wrapper>
      <SwapButton onClick={prev} className={topClass.join(' ')}><ArrowIcon /></SwapButton>
      <PageText>{slide < 9 ? `0${slide}` : slide}</PageText>
      <SwapButton onClick={next} className={bottomClass.join(' ')}><ArrowIcon /></SwapButton>
    </Wrapper>
  )
})