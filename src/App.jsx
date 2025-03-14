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
import ResearchProjectOne from "./Pages/ResearchProjectOne"


export default function App() {
	return (

    <BrowserRouter>
        <nav>
            <Link className="logo" to="/"><img src="Assets/SiteLogo2.png" alt="Logo for portfolio site" width="auto" height="50"/></Link>
            <div className="menu">
                <Link className="menuLinks" to="/about">ABOUT</Link>
                <Link className="menuLinks" to="/portfolio">PORTFOLIO</Link>
                <Link className="menuLinks" to="/blog">BLOG</Link>
            </div>
        </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ResearchProjectOne" element={<ResearchProjectOne />} />
        {/* <Route path="/books/:id" element={<BookDetailPage/>} /> */}
      </Routes>

      <Footer />
    
  
    </BrowserRouter>

    )
}