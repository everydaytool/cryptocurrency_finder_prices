function buscaPreco() {
    let moeda = document.querySelector('#currency').value
    let url = `https://www.mercadobitcoin.net/api/${moeda}/ticker`

    fetch(url).then((response) => response.json())
        .then((data) => mostrarPreco(data.ticker));

}

function mostrarPreco(dados) {
    let resultado = document.querySelector('#resultado');
    if (dados.erro) {
        resultado.innerHTML = 'Não foi possível localizar as estáticas.'
    } else {
        resultado.innerHTML = `<p><strong>Maior Preço: </strong> ${dados.high}</p>
                                <p><strong>Menor Preço: </strong>${dados.low}</p>
                                <p><strong>Volume: </strong> ${dados.vol}</p>
                                <p><strong>Maior preço de oferta de compra das últimas 24 horas: </strong> ${dados.buy}</p>
                                <p><strong>Menor preço de oferta de venda das últimas 24 horas: </strong> ${dados.sell}</p>
                                `
    }
}




function buscaPrecoData() {
    let moeda = document.querySelector('#currency2').value
    let dia = document.querySelector('#dia').value
    let mes = document.querySelector('#mes').value
    let ano = document.querySelector('#ano').value

    let url = `https://www.mercadobitcoin.net/api/${moeda}/day-summary/${ano}/${mes}/${dia}`

    fetch(url).then((response) => response.json())
        .then((data) => mostrarPrecoDia(data));
}


function mostrarPrecoDia(dados) {
    let resultado2 = document.querySelector('#resultado2');
    if (dados.erro) {
        resultado2.innerHTML = 'Não foi possível localizar as estáticas.'
    } else {
        resultado2.innerHTML = `<p><strong>Data do resumo diário: </strong>${dados.date}</p>
                                <p><strong>Preço unitário de abertura de negociação no dia: </strong>${dados.opening}</p>
                                <p><strong>Preço unitário de fechamento de negociação no dia: </strong>${dados.closing}</p>
                                <p><strong>Maior preço unitário de negociação no dia: </strong>${dados.highest}</p>
                                <p><strong>Menor preço unitário de negociação no dia: </strong>${dados.lowest}</p>
                                <p><strong>Volume de Reais (BRL) negociados no dia: </strong>${dados.volume}</p>
                                <p><strong>Quantidade da moeda digital negociada no dia: </strong>${dados.quantity}</p>
                                <p><strong>Número de negociações realizadas no dia: </strong>${dados.amount}</p>
                                <p><strong>Preço unitário médio das negociações no dia: </strong>${dados.avg_price}</p>
                                `
    }
}