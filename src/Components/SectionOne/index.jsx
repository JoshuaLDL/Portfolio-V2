import Button from "../Button"
import ImageOne from "../ImageOne"
import "./SectionOne.css"


export default function SectionOne({text, link}) {

    return(

    <div className="sectionOne">

        <div className="imageSectionOne">
            {/* <img src="Assets/ImageOne.png" alt="Illustration of a ginger man sat crossed-leg" width="100%" height="auto" /> */}
            <ImageOne />
        </div>
        <div className="innerSectionOne">
            <h1>ABOUT ME</h1>
            <p>Hello, I'm Joshua. I'm currently enrolled on the Software Developer Essentials at iO Academy, in Bath. 
                I'm confident that upon graduation, I will have the skills and knowledge to excel in a junior software developer role
                to continue developing my skills in HTML, CSS, Tailwind, JS and React for front-end and PHP, MySQL, Laravel and Node.js for back-end.</p>
                <Button text={text} link={link} />
        </div>

    </div>
    )
}