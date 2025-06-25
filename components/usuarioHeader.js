export function criarUsuarioHeader() {
  const div = document.createElement('div');
  div.className = 'cabecalho__icones__item';
  div.innerHTML = `
    <a href="#" class="cabecalho__videos"></a>
    <a href="#" class="cabecalho__apps"></a>
    <a href="#" class="cabecalho__notificacoes"></a>
    <a href="#" class="cabecalho__avatar"></a>
    <label class="cabecalho__switch">
      <input type="checkbox" class="cabecalho__switch-input">
      <span class="cabecalho__switch-slider"></span>
    </label>
  `;
  return div;
}