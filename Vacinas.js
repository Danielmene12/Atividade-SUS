// Exemplo de como preencher dinamicamente os detalhes da vacina
function carregarDetalhesVacina() {
  const titulo = document.getElementById('detalhe-titulo');
  const descricao = document.getElementById('detalhe-descricao');
  const itemsContainer = document.getElementById('detalhe-items');

  titulo.textContent = "Vacinação";
  descricao.textContent = "Proteja-se e ajude a erradicar doenças. Escolha a vacina disponível abaixo.";
  
  // Exemplo de item de vacina no menu de agendamento
  itemsContainer.innerHTML = `
    <div class="detalhe-item" onclick="selecionarVacina('Febre Amarela')">
      <div class="icon-square ic-green" style="width:3rem;height:3rem">💉</div>
      <div>
        <p class="font-800 text-gray-8">Febre Amarela</p>
        <p class="text-xs text-gray-5">Disponível para todas as faixas etárias</p>
      </div>
    </div>
  `;
}