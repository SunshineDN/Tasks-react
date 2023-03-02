import "./style.css"

export default function Tasks({title, desc, date, chooseDate}){    
    return(
        <div>
            <h1>{title}</h1>
            <h2>{desc}</h2>
            <h3>{date}</h3>
            <h3>{chooseDate}</h3>
            <br />
        </div>
    )
}