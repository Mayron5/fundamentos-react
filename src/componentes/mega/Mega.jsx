import { useState } from "react";
import Botao from "./Botao";
import MegaForm from "./MegaForm";
import Sorteados from "./Sorteados";

import './Mega.css'

const Mega = () => {

    const [quantidade, setQuantidade] = useState(0);
    const [numeros, setNumeros] = useState([]);

    return (
        <div>
            <div className="form">
                <MegaForm quantidade={quantidade} setQuantidade={setQuantidade} />
                <Botao quantidade={quantidade} setNumeros={setNumeros} />
            </div>
            <Sorteados quantidade={quantidade} numeros={numeros} />
        </div>
    );
};

export default Mega;