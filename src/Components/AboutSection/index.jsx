import Button from "../Button";
import ImageTwo from "../ImageTwo";
import "./AboutSection.css";

export default function AboutSection({link, text}) {

    return(

    <div className="aboutSection">

        <div className="innerAboutSection">
            <h1>ABOUT ME</h1>
            
            <p> A junior full stack developer specialising in React, PHP and Laravel. With training in Git and Agile methodology. I have used all the fundamental languages such as HTML, CSS and JavaScript throughout all of my projects.
                <br></br>
                <br></br>
                With a history in Graphic design and Marketing, I have a wide skillset perfectly tailored for business development - allowing me to help businesses perfect how they interact and communicate with their audiences online. Couple that with my interest into user psychology and research into subconscious consumption - I would make a great asset to any team of developers. </p>

                <a href="public/Assets/JoshuaDownton-LewisCV.pdf" download="Joshua D-L CV" target='_blank'>
                <button>Download CV</button>
                </a>
        </div>

        <div className="imageSectionTwo">
            <ImageTwo />
        </div>

    </div>
    )
}