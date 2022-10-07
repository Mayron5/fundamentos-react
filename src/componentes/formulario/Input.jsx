import { useState } from "react";

const Input = () => {

    const [valor, setValor] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Teste"
                value={valor}
                onChange={val => setValor(val.target.value)}
            />
        </div>
    )
}

export default Input;    