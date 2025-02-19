import "./TimelineCubes.css"

export default function TimelineCubes ({experience, time, text}){
    return(
        <div class="aboutMainBox">
            <h3>{experience}</h3>
            <h5>{time}</h5>
            <p>{text}</p>  
        </div>
    )
}