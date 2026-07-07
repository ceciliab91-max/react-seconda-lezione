import { useState } from 'react';

function BottoneColore() {
    const [attivo, setAttivo] = useState(false);
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setAttivo(!attivo)}
            >
                Cliccami
            </button>

            <p className="display-4">
                {attivo ? "Stato: ACCESO" : "Stato: SPENTO"}
            </p>
        </div>
    );
} export default BottoneColore;