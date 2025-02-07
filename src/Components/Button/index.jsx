import "./Button.css"

export default function Button ({link, text}) {
    return(
        <a href={link} >
            <button>{text}</button>
            </a>
    )
}