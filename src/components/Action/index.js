import { useState } from "react"
import Tasks from "../Tasks";
import "./style.css"

export default function Action(){
    const [id, setId] = useState(1)
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tasks, setTasks] = useState([]);

    function clear() {
        setTitle("");
        setDesc("");
    }

    function handleAdd() {
        if (title === "" || desc === ""){
            return
        }
        let date = new Date().toLocaleString("pt-BR")
        setTasks([{id:id, title: title, description: desc, date: date.split(",").join("")}, ...tasks]);
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
                <button onClick={handleAdd}>Adicionar</button>
            </div>
            {tasks.map( t => <div key={t.id}><Tasks title={t.title} desc={t.description} date={t.date}></Tasks><button onClick={e => handleClearTask(t)}>X</button></div>)}
        </div>
    )
}