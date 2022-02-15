
const botoes = document.getElementsByClassName("btnCalcular");

Array.from(botoes).forEach((elemento) => {
    elemento.addEventListener('click', (evento) => { calcularNota(evento.target.name); });
});

function calcularNota(nome) {
    const inputA = Number(document.getElementById(`inNota${nome}1`).value);
    const inputB = Number(document.getElementById(`inNota${nome}2`).value);
    const inputC = Number(document.getElementById(`inNota${nome}3`).value);
    const outputElement = document.getElementById(`out${nome}`);
    let hasError = false;

    if (inputA < 0 || inputA > 10 || inputB < 0 || inputB > 10) {
        alert('O valor para o primeiro e segundo trimestre deve estar entre 0 e 10!');
        hasError = true;
    }
    if (inputC < 0 || inputC > 4) {
        alert('O valor para o terceiro trimestre deve estar entre 0 e 4!');
        hasError = true;
    }

    if (hasError) { // Se tem erro, não precisa calcular a nota, só mostrar o alerta e reseta o texto exibido embaixo.
        outputElement.textContent = '';
        return;
    }

    var cNota = Math.abs(((inputA + inputB - 28) / 2) + inputC);
    outputElement.textContent = `Você precisa tirar no mínimo ${cNota.toFixed(3)} no provão de ${nome}!`;

}