const InputField = ({ text, handleInput, handleSubmit }) => {
    return (
        <div className="header__wrapper">
            <input className="input" value={text} onChange={(e) => {
                handleInput(e.target.value)
            }} />
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add todo</button>
        </div>
    )
}

export default InputField