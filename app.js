function sortear() {
   let qtdValores = parseInt(document.getElementById('quantidade').value);
   let inicioValor = parseInt(document.getElementById('de').value);
   let finalValor = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   for (let i = 0; i < qtdValores;  i++) {
        numero = obterNumeroAleatorio(inicioValor, finalValor);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(inicioValor, finalValor);
        }
        sorteados.push(numero);
   }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
   alterarStatusBotao();

} 

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let alteraBotao = document.getElementById('btn-reiniciar');

    if (alteraBotao.classList.contains('container__botao-desabilitado')) {
        alteraBotao.classList.remove('container__botao-desabilitado');
        alteraBotao.classList.add('container__botao');
    } else {
        alteraBotao.classList.remove('container__botao');
        alteraBotao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
     
   document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:    nenhum até agora</label>`;
   alterarStatusBotao();
}