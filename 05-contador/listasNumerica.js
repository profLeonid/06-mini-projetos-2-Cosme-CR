'use strict'


export function criarListaNumeros(quantidade){
    
    let listaNumero =[]
    for(let i=1; i <=quantidade; i++){
        listaNumero.push(i)
    }
    return listaNumero

}

export function criarListaPares(quantidade){
    let listaPares = []
    let par =2
    for(let i = 1; i<=quantidade; i++){
        listaPares.push(par)
        par +=2
    }
    return listaPares

}

export function criarListaImpares(quantidade){
    let listaImpares = []
    let impar =1
    for(let i = 1; i<=quantidade; i++){
        listaImpares.push(impar)
        impar+=2
    }
    return listaImpares

}

export function criarListaMulti5(quantidade){
    let listaMulti5 = []
    let mult = 5
    for(let i = 1; i<=quantidade; i++){
        listaMulti5.push(mult)
        mult+=5
    }
    return listaMulti5

}

export function criarListaPotencia2(quantidade){
    let listaPotencia2 = []
    for(let i = 0; i<quantidade; i++){
        listaPotencia2.push(2**i) 
    }
    return listaPotencia2
}