import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import HomeSectiontwo from "../Components/HomeSectionTwo";


export default function Homepage() {
    return (
        <div>
            <SectionOne text="Read more" link="/about" />
            <HomeSectiontwo />
        </div>

    )
}