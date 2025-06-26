export function criarMenuLateral() {
  const aside = document.createElement('aside');
  aside.className = 'menu__container';
  aside.innerHTML = `
    <ul class="menu__lista">
      <li>
        <a class="menu__itens" href="#"><i class="icone__inicio icone-item"></i><span>Início</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__explorar icone-item"></i><span>Explorar</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__shorts icone-item"></i><span>Shorts</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__inscricoes icone-item"></i><span>Inscrições</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__biblioteca icone-item"></i><span>Biblioteca</span></a>
      </li>
    </ul>
    <ul class="menu__lista">
      <li>
        <a class="menu__itens" href="#"><i class="icone__historico icone-item"></i><span>Histórico</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__relogio icone-item"></i><span>Assistir mais tarde</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__like icone-item"></i><span>Marcados com like</span></a>
      </li>
    </ul>
    <ul class="menu__lista">
      <li>
        <a class="menu__itens" href="#"><i class="icone__mostrar icone-item"></i><span>Mostrar mais 2</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__deschamps icone-item"></i><span>Capibarca</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__nerd icone-item"></i><span>Capimarcha</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__souto icone-item"></i><span>Capi solaris</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__iamarino icone-item"></i><span>Caipiravara</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__ballerini icone-item"></i><span>Capitangavara</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__gaveta icone-item"></i><span>Capivara ao cubo</span></a>
      </li>
      <li>
        <a class="menu__itens" href="#"><i class="icone__alura icone-item"></i><span>Capivara dental</span></a>
      </li>
      <li>
        <a class="menu__itens inscricoes" href="#">INSCRIÇÕES</a>
      </li>
    </ul>
    <ul class="menu__lista">
      <li class="jogos">
        <a class="menu__itens" href="#"><i class="icone__jogos icone-item"></i><span>Jogos</span></a>
      </li>
      <li class="filmes">
        <a class="menu__itens" href="#"><i class="icone__filmes icone-item"></i><span>Filmes</span></a>
      </li>
      <li class="premium">
        <a class="menu__itens" href="#"><i class="icone__videos icone-item"></i><span>Vídeo Premium</span></a>
      </li>
      <li class="menu__itens">
        <a href="#">MAIS DA PÁGINA</a>
      </li>
    </ul>
  `;
  return aside;
}