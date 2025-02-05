import Button from "../Button"
import ImageOne from "../ImageOne"
import "./SectionOne.css"


export default function SectionOne() {

    return(

    <div className="sectionOne">

        <div className="imageSectionOne">
            {/* <img src="Assets/ImageOne.png" alt="Illustration of a ginger man sat crossed-leg" width="100%" height="auto" /> */}
            <ImageOne />
        </div>
        <div className="innerSectionOne">
            <h1>About Me</h1>
            <p>Hello, I'm Josh. I'm currently enrolled on the Software Developer Essentials at iO Academy, in Bath. 
                I'm confident that upon graduation, I will have the skills and knowledge to excel in a junior web developer role
                to continue developing my skills in HTML, CSS and Javascript for front-end and PHP and Node.js for back-end.</p>
            <a href="./about.html">
                <Button text="Read More" />
            </a>
        </div>

    </div>
    )
}