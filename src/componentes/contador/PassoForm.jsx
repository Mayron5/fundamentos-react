const PassoForm = (props) => {

    const { passo, setPasso } = props;

    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input
                type="number"
                id="passoInput"
                value={passo}
                onChange={evento => setPasso(+evento.target.value)}
            />
        </div>
    )
}

export default PassoForm;