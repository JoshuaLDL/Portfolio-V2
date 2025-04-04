import { Link } from "react-router-dom"
import "./Button.css"

export default function Button ({link, text}) {
    return(
        <Link to={link}>
            <button>{text}</button>
        </Link>
    )
}