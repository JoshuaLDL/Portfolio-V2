import AboutSection from "../Components/AboutSection";
import TimelineCubes from "../Components/TimelineCubes";

export default function AboutPage() {
    return (
        <div>
            <AboutSection text="Download CV" link="./" />
           
            <div className="aboutSectionTwo">

                <TimelineCubes experience="SOFTWARE DEVELOPER" time="HTMLEPHANTS 2025" text="Working as part of a software team, I was a part of building a web app allowing allowing users to view available books, search for books by name, filter books by genre, view claimed books, claim a book themselves, review books and even add new books to the system. This was invaluable for teaching me how to effectively drive and navigate in pair-programming and work as a wider dev team using agile methodology and Git." />

                <TimelineCubes experience="FREELANCE DIGITAL MARKETER" time="GONE MAD MARKETING 2020-2025" text="From educational institutes to small businesses, I have worked with a huge range of clients over the years working on everything from SEO to UX, branding and paid media. 
                Teaching myself the necessary skills to be a digital marketer has allowed me the luxury of experiencing working with websites across many different platforms from user-friendly Wordpress sites to bespoke projects. 
                I taught myself the basics in CSS for these instances and that has ultimately led me to pursue a career as a software developer." />   

                <TimelineCubes experience="GRAPHIC DESIGNER AND DIGITAL MARKETER" time="BOOMSATSUMA 2022-2023" text="Here I headed up the internal department - outsourcing to agencies for PR and Web Development.  
                I re-designed their brand identity, designed a new website using wireframes with new digital assets and directed a hero film." />

                <TimelineCubes experience="DIGITAL MARKETING ASSISTANT" time="ARV SOLUTIONS 2020-2022" text="Here I learned how to single-handedly manage a workload while collaborating with different departments to deliver projects and meet deadlines for the needs of the business. This role taught me the value of applying my skills as a designer solve problems with a unique perspective." />
                
                <TimelineCubes experience="BA HONS GRAPHIC DESIGN" time="UWE 2018-2021" text="Awarded a first class with honours for my research into the digital graphic applications of climate awareness 
                materials and the iteration of internalised misogyny." />
                
             
                
               
                
        

    
"     
            </div>
            
        </div>
    )
}