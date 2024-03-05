import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Index />}/>
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>,
)
