// Seleciona elementos do DOM
const valorInput = document.getElementById('valor');
const taxaInput = document.getElementById('taxa');
const parcelaInput = document.getElementById('parcela');
const botao = document.getElementById('botao');
const tbody = document.querySelector('tbody');

// Função para formatar valores em reais
function formatarReais(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para simular financiamento com juros compostos
function simularFinanciamento() {
  const valorTotal = parseFloat(valorInput.value);
  const taxaJuros = parseFloat(taxaInput.value) / 100; // taxa em decimal
  const numParcelas = parseInt(parcelaInput.value);

  if (isNaN(valorTotal) || isNaN(taxaJuros) || isNaN(numParcelas) || valorTotal <= 0 || numParcelas <= 0) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Limpa a tabela antiga
  tbody.innerHTML = '';

  let saldoDevedor = valorTotal;

  for (let mes = 1; mes <= numParcelas; mes++) {
    // Juros do mês sobre o saldo devedor
    const jurosMes = saldoDevedor * taxaJuros;

    // Amortização constante (sistema SAC)
    const amortizacao = valorTotal / numParcelas;

    // Total da parcela do mês
    const totalMes = amortizacao + jurosMes;

    // Atualiza saldo devedor
    saldoDevedor -= amortizacao;

    // Cria linha da tabela
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${mes}</td>
      <td class="col-parcela">${formatarReais(amortizacao)}</td>
      <td class="col-juros">${formatarReais(jurosMes)}</td>
      <td class="col-total">${formatarReais(totalMes)}</td>
      <td class="col-saldo">${formatarReais(Math.max(saldoDevedor, 0))}</td>
    `;
    tbody.appendChild(tr);
  }
}

// Adiciona evento ao botão
botao.addEventListener('click', simularFinanciamento);




/*
function mes(quantidade){
    let qdt = Number(quantidade)
    let retorno = []

    for(let i =1; i <= quantidade; i++){
        retorno.push(i)
    }
    return retorno
}

console.log(mes(10))

function parcela(){

}
*/