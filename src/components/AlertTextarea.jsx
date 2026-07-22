import { useState } from "react";
export default function AlertTextarea() {
    const [testo, setTesto] = useState("");
    const SOGLIA_MINIMA = 10;
    const SOGLIA_MASSIMA = 20;
    const avvisi = ["Troppo corto", "Lunghezza ottimale  ", "Troppo lungo"];
    const ottieniMessaggio = () => {
        const lunghezza = testo.length;

        if (lunghezza === 0) return "Inizia a scrivere...";
        if (lunghezza < SOGLIA_MINIMA) {
            return avvisi[0];
        }
        if (lunghezza <= SOGLIA_MASSIMA) {
            return avvisi[1];
        }
        return avvisi[2];
    };

    return (
        <div className="p-3 border rounded bg-white mt-3">
            <textarea
                className="form-control"
                placeholder="Inserisci il testo qui..."
                value={testo}
                onChange={(e) => setTesto(e.target.value)}
            />

            <p className="mt-2 fw-bold">
                Stato testo: {ottieniMessaggio()}
            </p>
        </div>
    );
}