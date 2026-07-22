function Alert(props) {
    return (
        <>
            <div className={"alert alert-" + props.type} role="alert">
                {props.text}
                {props.children}
            </div>
        </>)
}
export default Alert;