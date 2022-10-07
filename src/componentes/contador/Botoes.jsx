const Botoes = (props) => {

    const {inc, dec} = props;

    return (
        <div>
            <button style={{ 'cursor': 'pointer' }} onClick={inc}> + </button>
            <button style={{ 'cursor': 'pointer' }} onClick={dec}> - </button>
        </div>
    )
}

export default Botoes;