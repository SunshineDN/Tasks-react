import "./style.css"

export default function Tasks({title, desc, date, chooseDate, randomColor}){    
    return(
        <div className="tasks-container" style={{"backgroundColor": randomColor}}>
            <div className="task-wrapper">
                <div className="text-box">
                    <h1>Título:</h1>
                    <p>{title}</p>
                </div>
                <div className="text-box">
                    <h1>Descrição:</h1>
                    <p>{desc}</p>
                </div>
                <div className="text-box">
                    <h1>Data limite:</h1>
                    <p>{chooseDate}</p>
                </div>
                <div className="date-wrapper">
                    <h3>Tempo restante:</h3>
                    <div className="date-box">
                        <p>2</p><h4>Dias</h4>
                        <p>2</p><h4>Horas</h4>
                        <p>2</p><h4>Minutos</h4>
                        <p>2</p><h4>Segundos</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}