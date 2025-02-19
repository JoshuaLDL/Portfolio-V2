import { useEffect, useState } from "react"
import "./PortfolioContainers.css"
import { data } from "react-router-dom"
import SingleProject from "../SingleProject"

export default function Projects() {
    const [Projects, setProjects] = useState([])
    
    function getData () {
        fetch('public/projects.json')
        .then (res => res.json())
        .then (data => {
            setProjects (data.projects)
            console.log (data)
        })
    }

    useEffect(getData, [])


    return (
        <div>
            <h2>My Projects</h2>
            <div className="portfolio-container">
            {/* map loops through each piece of data in an array and gives them value */}
            {Projects.map(function (project) {
                return <SingleProject 
                        key={project.title}
                        image={project.image} 
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        />

            })}
        </div>
            </div>
    )
}