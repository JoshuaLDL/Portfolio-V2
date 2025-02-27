import Button from "../Button"

export default function SingleProject ({title, image, description, link}) {
    
    return (
        <div className="project-card">
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
            <Button link={link} text="View" />
            

        </div>
    )
}