import { useState } from "react"
import Tasks from "../Tasks";
import "./style.css"

export default function Action(){
    const [id, setId] = useState(1)
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [chooseDate, setChooseDate] = useState("");
    const [tasks, setTasks] = useState([]);

    function clear() {
        setTitle("");
        setDesc("");
        setChooseDate("");
    }

    function handleAdd() {
        if (title === "" || desc === ""){
            return
        }

        let date = new Date().toLocaleString("pt-BR").split(",").join("");
        let newDate = chooseDate.split("T").join(" ");

        console.log(Math.abs(date[0] - newDate[0]))
        setTasks([{id:id, title: title, description: desc, date: date, chooseDate: newDate}, ...tasks]);
        setId(e => e += 1)
        clear();
    }

    function handleClearTask(task) {
        setTasks(tasks.filter(t => t !== task))
    }

    return(
        <div className="act">
            <h1>DoTask</h1>
            <div>
                <input className="title" type="text" value={title} placeholder="Título" onChange={e => setTitle(e.target.value)} />
                <input className="desc" type="text" value={desc} placeholder="Descrição" onChange={e => setDesc(e.target.value)} />
                <input className="date" type="datetime-local" value={chooseDate} placeholder="Informe a data limite" onChange={e => setChooseDate(e.target.value)} />
                <button className="addBtn" onClick={handleAdd}>Adicionar</button>
            </div>
            {tasks.map( t => <div key={t.id}><Tasks title={t.title} desc={t.description} date={t.date} chooseDate={t.chooseDate}></Tasks><button className="removeBtn" onClick={e => handleClearTask(t)}>X</button></div>)}
        </div>
    )
}