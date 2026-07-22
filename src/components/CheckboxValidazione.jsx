import { useState } from "react";
function CheckboxValidazione() {
    const [valido, setValido] = useState(false);
    return (
        <div className="container-sm p-3 border rounded bg-white">
            <h5>Esercizio Validazione</h5>
            <input
                type="checkbox"
                className="form-check-input me-2"
                checked={valido}
                onChange={() => setValido(!valido)}
            />
            <label>Accetto i termini</label>

            <div className="mt-3">
                {valido ? "Validato" : "Non Validato"}
            </div>
        </div>
    );

} export default CheckboxValidazione