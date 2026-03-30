'use strict'

// Pega os elementos do HTML
const gerar = document.getElementById("gerar")
const input = document.getElementById("numero")
const tabela = document.getElementById("tabela")

// Função principal que preenche a tabela
function preencherTabela(){

    const numero = Number(input.value)

    if(input.value === "" || isNaN(numero)){
        alert("Digite um número válido!")
        return
    }

    // Limpa a tabela antes de preencher
    tabela.replaceChildren()

    // faz as contas
    for(let i = 1; i <= 10; i++){
        criarLinha(i, numero + i, numero - i, numero * i, (numero / i).toFixed(2))
    }
}

// Função que cria uma linha da tabela
function criarLinha(contador, soma, subtracao, multiplicacao, divisao){

    const tr = document.createElement("tr")
    const tdContador      = document.createElement("td")
    const tdSoma          = document.createElement("td")
    const tdSubtracao     = document.createElement("td")
    const tdMultiplicacao = document.createElement("td")
    const tdDivisao       = document.createElement("td")

    tdContador.textContent      = contador
    tdSoma.textContent          = soma
    tdSubtracao.textContent     = subtracao
    tdMultiplicacao.textContent = multiplicacao
    tdDivisao.textContent       = divisao

    tr.replaceChildren(tdContador, tdSoma, tdSubtracao, tdMultiplicacao, tdDivisao)
    tabela.appendChild(tr)
}

// Adiciona o evento de clique ao botão
gerar.addEventListener("click", preencherTabela)