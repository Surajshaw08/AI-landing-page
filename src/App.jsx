import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Featues from './components/Featues'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<>
        <Herosection  />
         <Featues  />
         <Workflow  />
         <Pricing  />
         <Testimonials  />
        </>}></Route>
        {/* ALL Routes============================================== */}
        <Route path='/Featues' element={<Featues  />}></Route>
        <Route path='/Workflow' element={<Workflow  />}></Route>
        <Route path='/Pricing' element={<Pricing  />}></Route>
        <Route path='/Testimonials' element={<Testimonials  />}></Route>
        {/* ALL Routes============================================== */}
      </Routes>
      <Footer  />
    </Router>
  )
}

export default App
