import Button from "../Button"
import "./SectionTwo.css"

export default function SectionTwo () {
    return(
        <div className="sectionTwo">
        <div className="mainBox">
            <h2>Portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="./portfolio.html">
                <Button text="Take a Look" />
            </a>
        </div>

        <div className="mainBox">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="./contact.html">
                <Button text="Send a Message" />
            </a>
        </div>

    </div>


    )
}