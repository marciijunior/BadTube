import { criarHeader } from './components/header.js';
import { criarMenuLateral } from './components/menuLateral.js';
import { criarSecaoCategorias } from './components/categorias.js';
import { criarListaVideos, adicionarFiltros } from './components/listaVideos.js';
import { videos } from './videos.js'; // Importa o array com os vídeos

const app = document.getElementById("app");

// Header
app.appendChild(criarHeader());

// Menu lateral
const menuWrapper = document.createElement("div");
menuWrapper.className = "menu__container-wrapper";
menuWrapper.appendChild(criarMenuLateral());
app.appendChild(menuWrapper);

// Seção de categorias
app.appendChild(criarSecaoCategorias());

// Pega o array de vídeos dentro do objeto na posição 0
const listaVideos = videos[0].videos;

// Cria a lista de vídeos passando o array correto
app.appendChild(criarListaVideos(listaVideos));

// Ativa os filtros para funcionar a pesquisa e categoria
adicionarFiltros();
