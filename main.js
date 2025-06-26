import { criarHeader } from './components/header.js';
import { criarMenuLateral } from './components/menuLateral.js';
import { criarSecaoCategorias } from './components/categorias.js';
import { criarListaVideos, adicionarFiltros } from './components/listaVideos.js';
import { videos } from './videos.js';  // videos é um array com um objeto que tem 'videos' dentro

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

// Aqui acessa o array interno que está dentro do objeto na posição 0
const listaVideos = videos[0].videos;

// Passa o array correto para criar a lista
app.appendChild(criarListaVideos(listaVideos));

// Ativa os filtros
adicionarFiltros();
