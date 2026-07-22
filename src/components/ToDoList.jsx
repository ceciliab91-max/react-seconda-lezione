import { useState } from "react"
export default function ToDoList() {
    const [selected, setSelected] = useState("")
    const persons = [
        { nome: "Mario", ruolo: "Developer" },
        { nome: "Luigi", ruolo: "Designer" },
        { nome: "Peach", ruolo: "Manager" }
    ];
    const personsFiltered = persons.filter(person => person.role === selected)
    return (
        <>
            {personsFiltered.map(person => (
                <p>{person.name} {person.role}</p>)
            )}
            <select value={selected} onChange={event => setSelected(event.target.value)}>
                <option value="Manager">Manager </option>
                <option value="Designer"> Designer </option>
                <option value="Developer">  Developer</option>
            </select>
            <p>{selected}</p>
        </>
    )
}