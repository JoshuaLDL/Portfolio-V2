import Button from "../Button"
import ImageOne from "../ImageOne"
import "./SectionOne.css"


export default function SectionOne({text, link}) {

    return(

    <div className="sectionOne">

        <div className="imageSectionOne">
            <ImageOne />
        </div>
        <div className="innerSectionOne">
            <h1>ABOUT ME</h1>
            <p>Hello, I'm Joshua. I have recently graduated from the Software Developer Essentials course at iO Academy, in Bath. 
                Upon graduation, I have the necessary skills and knowledge, coupled with my own drive to self-initiate learning, to excel in a junior software developer role to continue developing my full stack skills in React, PHP and Laravel.</p>
                <Button text={text} link={link} />
        </div>

    </div>
    )
}