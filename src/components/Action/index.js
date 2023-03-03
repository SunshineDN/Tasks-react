import { useState } from "react"
import Tasks from "../Tasks";
import "./style.css"

export default function Action() {
    const [id, setId] = useState(1)
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [chooseDate, setChooseDate] = useState("");
    const [tasks, setTasks] = useState([]);

    const [styleTransparent, setStyleTransparent] = useState({color: "transparent"})

    function clear() {
        setTitle("");
        setDesc("");
        setChooseDate("");
        setStyleTransparent({color: "transparent"});
    }

    function handleAdd() {
        if (title === "" || desc === "" || chooseDate === "") {
            return
        }
        let newDate = chooseDate.split("T");
        const formatedDate = newDate[0].split("-").reverse().join("/");
        newDate[0] = formatedDate;

        const r = Math.floor(Math.random() * 255 + 1);
        const g = Math.floor(Math.random() * 255 + 1);
        const b = Math.floor(Math.random() * 255 + 1);
        setTasks([{ id: id, title: title, description: desc, printDate: newDate.join(" "), chooseDate: chooseDate.split("T").join(" "), color: {r, g, b, a: .5} }, ...tasks]);
        setId(e => e += 1)
        clear();
    }

    function handleClearTask(task) {
        setTasks(tasks.filter(t => t !== task))
    }

    function handleChangeColor(value){
        if (value !== ""){
            setStyleTransparent({color: "white"});
        } else {
            setStyleTransparent({color: "transparent"});
        }
    }

    return (
        <div>
            <div className="container">
                <h1>DoTask</h1>
                <form className="wrapper">
                    <div className="input-box">
                        <input className="title" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                        <label>Título</label>
                    </div>

                    <div className="input-box">
                        <input className="desc" type="text" value={desc} onChange={e => setDesc(e.target.value)} required />
                        <label>Descrição</label>
                    </div>
                    <div className="input-box">
                        <input className="date" style={styleTransparent} type="datetime-local" value={chooseDate} onChange={e => setChooseDate(e.target.value, handleChangeColor(e.target.value))} required />
                        <label>Data limite</label>
                    </div>

                    <input type="submit" className="addBtn" onClick={handleAdd} value="Adicionar" />
                </form>
            </div>
            {tasks.map(t => <div className="component-container" key={t.id}><Tasks title={t.title} desc={t.description} randomColor={t.color} printDate={t.printDate} date={t.date} chooseDate={t.chooseDate}></Tasks><button className="removeBtn" onClick={e => handleClearTask(t)}>X</button></div>)}
        </div>
    )
}