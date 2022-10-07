import './Sorteados.css'

const Sorteados = (props) => {

    const { numeros } = props;

    return (
        <>
            <h6 className='title'>Número sorteados:</h6>
            <div className='sorteados'>
                {
                    numeros.map((sorteado, i) => (
                        <div key={i} className='sorteado'>{sorteado}</div>
                    ))
                }
            </div>
        </>
    )
}

export default Sorteados;