import "./Nav.css"

export default function Nav() {
    return (

        <div className="header">
        <p><a href="./index.html">
            <img src="#" alt="Logo for portfolio site" width="100" height="132" />
        </a></p>
        <nav className="menu">
            <a className="menuLinks" href="./about.html">About</a>
            <a className="menuLinks" href="./portfolio.html">Portfolio</a>
            <a className="menuLinks" href="./contact.html">Contact</a>
        </nav>
        </div>

)
}