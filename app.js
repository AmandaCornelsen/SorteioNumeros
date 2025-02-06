function sortear() {
   let qtdValores = parseInt(document.getElementById('quantidade').value);
   let inicioValor = parseInt(document.getElementById('de').value);
   let finalValor = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   for (let i = 0; i < qtdValores;  i++) {
        numero = obterNumeroAleatorio(inicioValor, finalValor);
        sorteados.push(numero);
   }

   alert(sorteados);
} 

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}