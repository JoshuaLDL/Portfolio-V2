import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import SectionOne from "./Components/SectionOne"
import SectionTwo from "./Components/SectionTwo"
import Homepage from "./Pages/Homepage"
import AboutPage from "./Pages/AboutPage"
import Portfolio from "./Pages/PortfolioPage"
import ContactPage from "./Pages/ContactPage"


export default function App() {
	return (

    <BrowserRouter>
        <nav>
            <Link to="/"><img src="#" alt="Logo for portfolio site" width="100" height="132"/></Link>
            <div className="menu">
                <Link className="menuLinks" to="/about">About</Link>
                <Link className="menuLinks" to="/portfolio">Portfolio</Link>
                <Link className="menuLinks" to="/contact">Contact</Link>
            </div>
        </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/books/:id" element={<BookDetailPage/>} /> */}
      </Routes>

      <Footer />
    
  
    </BrowserRouter>

    )
}