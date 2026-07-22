function CardEsercizio({ titolo, children }) {
    return (
        <div className="col-md-4">
            <div className="p-3 border rounded bg-light h-100">
                <h3>{titolo}</h3>
                <hr />
                {children}
            </div>
        </div>
    );
}

export default CardEsercizio;