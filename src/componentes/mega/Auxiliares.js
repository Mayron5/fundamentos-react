function gerarNumeroAleatorio() {
    return Math.round(Math.random() * (100 - 1) + 1);
}

function gerarNumeros(quantidade) {

    let numerosSorteados = new Set();

    while (numerosSorteados.size < quantidade) {
        numerosSorteados.add(gerarNumeroAleatorio());
    }
    return [...numerosSorteados]
}

export default gerarNumeros;