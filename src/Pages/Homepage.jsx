import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


export default function Homepage() {
    return (
        <div>
            <SectionOne text="Read more" link="./about" />
            <div className="sectionTwo">
            <SectionTwo title="Portfolio" text="Take a look" link="./portfolio"/>
            <SectionTwo title="Contact" text="Send a message" link="./contact"/>
            </div>
        </div>

    )
}