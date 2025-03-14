import "./Nav.css"

export default function Nav() {
    return (

        <div className="header">
        <a href="./index.html">
            <img src="Assets/SiteLogo2.png" width="100" height="132" />
        </a>
        <nav className="menu">
            <a className="menuLinks" href="./about.html">About</a>
            <a className="menuLinks" href="./portfolio.html">Portfolio</a>
            <a className="menuLinks" href="./contact.html">Blog</a>
        </nav>
        </div>

)
}