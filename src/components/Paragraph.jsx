import { useState } from "react";

export default function Paragraph() {
    const [align, setAlign] = useState("left");
    return (
        <>
            <div className="form-check">
                <input onChange={event => setAlign(event.target.value)}
                    value="left"
                    type="radio"
                    name="radioDefault"
                    checked={align === "left"} />
                <label className="form-check-label">
                    Sinistra
                </label>
            </div>

            <div className="form-check">
                <input onChange={event => setAlign(event.target.value)}
                    value="center"
                    type="radio"
                    name="radioDefault"
                    checked={align === "center"} />
                <label className="form-check-label">
                    Centro
                </label>

                <div className="form-check">
                    <input onChange={event => setAlign(event.target.value)}
                        value="right"
                        type="radio"
                        name="radioDefault"
                        checked={align === "right"} />
                    <label className="form-check-label">
                        Destra
                    </label>
                </div>
            </div>
        </>
    )
}