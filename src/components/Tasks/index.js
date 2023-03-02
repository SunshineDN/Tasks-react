export default function Tasks({title, desc, date}){
    return(
        <div>
            <h1>{title}</h1>
            <h2>{desc}</h2>
            <h2>{date}</h2>
            <br />
        </div>
    )
}