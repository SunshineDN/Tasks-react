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
        let date = new Date().toLocaleString("pt-BR")
        setTasks([{id:id, title: title, description: desc, date: date.split(",").join("")}, ...tasks]);
        setId(e => e += 1)
        clear();
    }

    return(
        <div className="act">
            <h1>DoTask</h1>
            <input className="title" type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} />
            <input className="desc" type="text" placeholder="Descrição" onChange={e => setDesc(e.target.value)} />
            <button onClick={handleAdd}>Adicionar</button>
            {tasks.map( t => <Tasks key={t.id} title={t.title} desc={t.description} date={t.date}></Tasks>)}
        </div>
    )
}