import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


export default function Homepage() {
    return (
        <div>
            <SectionOne text="Read More" link="./about" />
            <SectionTwo />
        </div>

    )
}