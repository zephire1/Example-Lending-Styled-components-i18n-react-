import { memo } from 'react'

// components
import {
  Header,
  Footer,
  Slider
} from 'uikit'

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
    </div>
  )
}

export default memo(App)