import './App.css'
import { Navbar } from './components/Navbar'
import { ServicesNavbar } from './components/ServicesNavbar'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ServicesNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/career" element={<div>Career</div>} />
          <Route path="/training" element={<div>Training</div>} />
          <Route path="/faqs" element={<div>FAQs</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
