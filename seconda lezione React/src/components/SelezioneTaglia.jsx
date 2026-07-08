import { useState } from "react";
function SelezioneTaglie() {
    const taglie = ['XS', 'S', 'M', 'L', 'XL'];
    const [tagliaSelezionata, setTagliaSelezionata] = useState("null");
    const scegliColore = (tagliaDelBottone) => {
        if (tagliaSelezionata === tagliaDelBottone) {
            return "btn btn-primary";
        } else {
            return "btn btn-outline-primary";
        }
    };
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            {taglie.map((taglia, index) => (
                <button
                    key={index}
                    type="button"
                    className={scegliColore(taglia)}
                    onClick={() => setTagliaSelezionata(taglia)}
                >
                    {taglia}
                </button>
            ))}

        </div>
    )

} export default SelezioneTaglie;