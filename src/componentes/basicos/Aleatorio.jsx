
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

const Aleatorio = props => {

    const { min, max } = props

    return (
        <div>
            <p>Número mínimo: {min}</p>
            <p>Número máximo: {max}</p>
            <p>Número sorteado: {randomNumberInterval(min, max)}</p>
        </div>
    );
}

export default Aleatorio;