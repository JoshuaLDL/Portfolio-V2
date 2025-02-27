import Button from "../Button"
import "./SectionTwo.css"

export default function SectionTwo ({title, body, text, link}) {
    return(
        // <div className="sectionTwo">
        <div className="mainBox">
            <h2>{title}</h2>
            <p>{body}</p>
            <Button text={text} link={link}/>
        </div>

        /* <div className="mainBox">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text={text} link={link}/>
        </div>

    </div> */


    )
}