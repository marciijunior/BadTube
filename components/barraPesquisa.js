export function criarBarraPesquisa() {
  const form = document.createElement('form');
  form.className = 'form__pesquisa';

  form.innerHTML = `
    <input 
      class="pesquisar__input" 
      type="search" 
      placeholder="Pesquisar"
      aria-label="Pesquisar"
    >
    <img src="/img/topbar/keyboard.png" alt="Ícone de teclado" class="pesquisar__input-teclado">
    <button class="pesquisar__btn">
      <img src="/img/topbar/search.png" alt="ícone de lupa">
    </button>
    <button class="cabecalho__audio">
      <img src="/img/topbar/Mic.png" alt="ícone de microfone">
    </button>
  `;

  form.addEventListener('submit', (e) => e.preventDefault());

  return form;
}