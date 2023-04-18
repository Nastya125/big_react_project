import "./mainBtn.css"

function MainBtn ( {textContent, className, onClick } ) {
    const clases = `main-btn ${className}`
    return (
        <button onClick = { onClick } className={clases}>
            {textContent}
        </button>
    )
}

export default MainBtn;