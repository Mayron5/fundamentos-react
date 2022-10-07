import gerarNumeros from "./Auxiliares";

import './Botao.css'

const Botao = (props) => {

    const { quantidade, setNumeros } = props;

    function getNumerosSorteados() {
        setNumeros(gerarNumeros(quantidade))
    }

    return (
        <div className="button">
            <button onClick={getNumerosSorteados}>Sortear</button>
        </div>
    )
};

export default Botao;