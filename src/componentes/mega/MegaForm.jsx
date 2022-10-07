import './MegaForm.css'

const MegaForm = (props) => {

    const { quantidade, setQuantidade } = props

    return (
        <div className='megaForm'>
            <label htmlFor="quantidade">Quantidade de número sorteados: </label>
            <input type='number' id='quantidade' value={quantidade} onChange={event => setQuantidade(event.target.value)} />
        </div>
    )
};

export default MegaForm;