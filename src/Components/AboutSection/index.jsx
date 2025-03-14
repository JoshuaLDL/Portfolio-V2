import Button from "../Button";
import ImageTwo from "../ImageTwo";
import "./AboutSection.css"



export default function AboutSection({link, text}) {

    return(

    <div className="aboutSection">

        <div className="innerAboutSection">
            <h1>ABOUT ME</h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <Button text={text} link={link} />
        </div>

        <div className="imageSectionTwo">
            {/* <img src="Assets/ImageOne.png" alt="Illustration of a ginger man sat crossed-leg" width="100%" height="auto" /> */}
            <ImageTwo />
        </div>

    </div>
    )
}