import "./closeBtn.css"

function closeBtn({ close }) {
    return (
        <button onClick={close} className="close">x</button>
    )
}

export default closeBtn  