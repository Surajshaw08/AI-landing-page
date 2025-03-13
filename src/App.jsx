import { useState } from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Featues from './components/Featues'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Herosection />
      <Featues />
      <Workflow />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
