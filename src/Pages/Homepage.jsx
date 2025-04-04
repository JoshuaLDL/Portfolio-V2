import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import HomeSectiontwo from "../Components/HomeSectionTwo";


export default function Homepage() {
    return (
        <div>
            <SectionOne text="Read more" link="./about.html" />
            {/* <div className="sectionTwo">
            <SectionTwo title="PORTFOLIO" text="Take a look" link="./portfolio"
            body="A portfolio of all my recent projects from front-end to back-end."/>
            <SectionTwo title="CONTACT" text="Send a message" link="./contact"
            body="Send me an email with any questions you might have and I'll get right back to you!"/>
            </div> */}
            <HomeSectiontwo />
        </div>

    )
}