'use strict'
import{criarListaPares}from "./listasNumerica.js";

import * as Listas from "./listasNumerica.js"

const gerarNumeros = document.getElementById("gerarNumeros")

function preencherTabela(){
    const quantidade     = Number(document.getElementById("quantidade").value)

    const listaNumero    = Listas.criarListaNumeros(quantidade)
    const listaPares     = Listas.criarListaPares(quantidade)
    const listaImpares   = Listas.criarListaImpares(quantidade)
    const listaMulti5    = Listas.criarListaMulti5(quantidade)
    const listaPotencia2 = Listas.criarListaPotencia2(quantidade)

    document.getElementById("tabela").replaceChildren()
    for(let i=0;  i <=quantidade; i++){
        criarLinha(listaNumero[i], listaPares[i], listaImpares[i],listaMulti5[i],listaPotencia2[i] )
    }  
}

function criarLinha(numero,par, impar, mult5,potencia2){

    const tabela         = document.getElementById("tabela")

    const tr             = document.createElement("tr")
    const tdnumeros      = document.createElement("td")
    const tdPares        = document.createElement("td")
    const tdImpares      = document.createElement("td")
    const tdMulti5       = document.createElement("td")
    const tdpotencia2    = document.createElement("td")

    tdnumeros.textContent    = numero
    tdPares.textContent      = par
    tdImpares.textContent    = impar
    tdMulti5.textContent     = mult5
    tdpotencia2.textContent  = potencia2

    tr.replaceChildren(tdnumeros, tdPares, tdImpares, tdMulti5, tdpotencia2)
    tabela.appendChild(tr)

}

gerarNumeros.addEventListener("click", preencherTabela)