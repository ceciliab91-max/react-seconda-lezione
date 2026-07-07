import { useState } from 'react';

function Contatore() {
    const [conteggio, setConteggio] = useState(0);

    return (
        <div className="text-center p-2">
            <p className="display-4">{conteggio}</p>

            <button className="btn btn-primary me-2" onClick={() => setConteggio(conteggio + 1)}>
                Incrementa
            </button>

            <button className="btn btn-danger" onClick={() => setConteggio(0)}>
                Reset
            </button>
        </div>
    );
}

export default Contatore;