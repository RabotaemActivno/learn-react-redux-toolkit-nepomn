const InputField = ({err, title, handleInput, handleSubmit }) => {
    return (
        <div className="header__wrapper">
            <input 
                className="input" 
                placeholder={err}
                value={title} 
                onChange={(e) => {
                    handleInput(e.target.value)
            }} />
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add todo</button>
        </div>
    )
}

export default InputField