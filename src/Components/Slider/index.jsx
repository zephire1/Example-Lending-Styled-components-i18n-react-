import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

// styles
import {
  Wrapper,
  Item,
  InfoBlock,
  Type,
  Name,
  SubName,
  Text,
  Spacer,
  Preview,
  SliderZone
} from './styled'

// uikit
import {
  Swaper
} from 'uikit'

// jsons
import Items from 'Items.json'

export const Slider = memo(() => {

  const { t, i18n } = useTranslation()
  const [slide, setSlide] = useState(0)
  const nextSlide = () => { setSlide((slide + 1)) }
  const prevSlide = () => { setSlide((slide - 1)) }

  return (
    <Wrapper>

      <Swaper slide={(slide+1)} maxSlides={Items.length} next={nextSlide} prev={prevSlide} />

      <SliderZone>

        {Items.map((item, index) => {
          return (
            <Item key={index} className={index === slide ? 'show' : 'hide'}>

              <InfoBlock>

                <Type>{item.Type}</Type>
                <Name>{item.Name}</Name>
                <SubName>{item.SubName}</SubName>

                <Text>{t(item.Description)}</Text>

                <Spacer />

                <Text>{t(item.Info)}</Text>

              </InfoBlock>


              <Preview src={`/${item.Type.toLowerCase()}/${item.Img}.png`} loading="lazy" alt={item.Name} />

            </Item>
          )
        })}

      </SliderZone>

    </Wrapper>
  )
})