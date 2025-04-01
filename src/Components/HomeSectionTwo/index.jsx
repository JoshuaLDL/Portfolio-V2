import "./HomeSectionTwo.css";

export default function HomeSectiontwo(){

    return (
        <div className="sectionTwo">
            <div className="mainBox">
                <h2>PORTFOLIO</h2>
                <p>A portfolio of all my recent projects from front-end to back-end.</p>
                <a href = "./portfolio">
                    <button>View Work</button>
                </a>
            </div>

            <div className="mainBox">
                <h2>CONTACT</h2>
                <p>Send me an email with any questions you might have and I'll get right back to you!</p>
                <a href = "mailto:joshuadownton-lewis@outlook.com">
                    <button>Send a Message</button>
                </a>
            </div>
        </div>
    )
}
