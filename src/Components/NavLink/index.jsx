import "./NavLink.css"

export default function NavLink({link, text}) {
    return(
        <a className="NavLink" href={link}>{text}</a>
    )
}