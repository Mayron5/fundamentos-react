import Aleatorio from "./componentes/basicos/Aleatorio";
import ComParametro from "./componentes/basicos/ComParametro";
import Primeiro from "./componentes/basicos/Primeiro";
import Card from "./componentes/layout/Card";

import './App.css'
import Familia from "./componentes/basicos/Familia";
import Input from "./componentes/formulario/Input";
import Contador from "./componentes/contador/Contador";
import Mega from "./componentes/mega/Mega";

const App = () => {
    return (
        <div id="app">
            <div className="cards">

                <Card titulo="Desafio da MegaSena" color="#009b77">
                    <Mega />
                </Card>

                <Card titulo="Contador com classe" color="#424242">
                    <Contador numeroInicial={10} passoInicial={1} />
                </Card>

                <Card titulo="Formulário" color="#160a47">
                    <Input />
                </Card>

                <Card titulo="Componente com Filhos" color="#6495ED">
                    <Familia sobrenome="Duarte" />
                </Card>

                <Card titulo="Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={10} max={20} />
                </Card>

                <Card titulo="Primeiro" color="#FFA07A">
                    <Primeiro />
                </Card>

                <Card titulo="Com Parametro" color="#40E0D0">
                    <ComParametro
                        titulo="Componente tunadão"
                        subtitulo="React é loucura"
                    />
                </Card>
            </div>
        </div>
    )
};

export default App;