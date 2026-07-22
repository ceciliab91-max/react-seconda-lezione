import { useState } from "react"
export default function TextArea() {

    const [caratteri, setCaratteri] = useState("")
    const Max = 100 - caratteri.length;
    return (
        <>
            <textarea name="" id="" disabled={Max <= 0} value={caratteri} onChange={event => setCaratteri(event.target.value)}>
                {caratteri}
            </textarea>
            <p>Caratteri Disponibili: {Max}</p>
        </>
    )
} 