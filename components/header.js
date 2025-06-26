import { criarBarraPesquisa } from './barraPesquisa.js';
import { criarUsuarioHeader } from './usuarioHeader.js';

export function criarHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="cabecalho__container">
      <div class="logo__item">
        <img class="logo__desktop" src="/img/logo.png" alt="Logo do VidFlow Desktop" />
        <img class="logo__mobile" src="/img/logo-celular.png" alt="Logo do VidFlow Mobile" />
      </div>
      <div class="cabecalho__pesquisar__item"></div>
      <div class="cabecalho__icones__item"></div>
    </nav>
  `;
  header.querySelector('.cabecalho__pesquisar__item').appendChild(criarBarraPesquisa());
  header.querySelector('.cabecalho__icones__item').replaceWith(criarUsuarioHeader());
  return header;
}