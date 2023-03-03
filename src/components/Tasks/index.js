import useCountdown from "../../hooks/useCountdown";
import "./style.css"

export default function Tasks({ title, desc, printDate, chooseDate, randomColor }) {
    const [day, hour, minute, second] = useCountdown(chooseDate);

    function translateRGB(colorObj){
        return `rgba(${colorObj.r},${colorObj.g},${colorObj.b},${colorObj.a})`
    }

    function handleChangeColor(r, g, b) {
        // Calcula a luminosidade relativa da cor
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        // Verifica se a luminosidade é menor que 0,5 (cor escura)
        if (luminance < 0.5) {
            return "#fff"
        } else {
            return "#163A6C"
        }
    }

    return (
        <div className="tasks-container" style={{ "backgroundColor": translateRGB(randomColor), "color": handleChangeColor(randomColor.a/255, randomColor.g/255, randomColor.b/255)}}>
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
                    <p>{printDate}</p>
                </div>
                <div className="date-wrapper">
                    <h3>Tempo restante:</h3>
                    <p>{day}</p><h4>Dias</h4>
                    <p>{hour}</p><h4>Horas</h4>
                    <p>{minute}</p><h4>Minutos</h4>
                    <p>{second}</p><h4>Segundos</h4>
                </div>
            </div>
        </div>
    )
}