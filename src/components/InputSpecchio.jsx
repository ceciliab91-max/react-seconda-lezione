import { useState } from "react";
export default function InputSpecchio() {
    const [testo, setTesto] = useState("")
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Scrivi qualcosa..."
                value={testo}
                onChange={(e) => setTesto(e.target.value)}
            />
            <p>Stai digitando: {testo}</p>
        </>
    )
}