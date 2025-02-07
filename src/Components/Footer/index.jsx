import NavLink from "../NavLink"
import "./Footer.css"

export default function Footer() {
    return(
        <footer>
        <div className="icons">
            <a className="socialLinks" href="https://www.instagram.com/gonemadmarketing/" target="blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a className="socialLinks" href="https://www.linkedin.com/in/joshuadownton-lewis/">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="socialLinks" href="mailto:joshuadowntonlewis@outlook.com" target="blank">
                <i class="fa-regular fa-envelope"></i>
            </a>

        </div>
        <div>
            <p>Copyright &copy; 2025 Joshua Downton-Lewis
                <NavLink link="#" text="Example1" />
                <NavLink link="#" text="Example2" />
            </p>
        </div>
        </footer>
    )
}