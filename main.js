import { criarHeader } from './components/header.js';
import { criarMenuLateral } from './components/menuLateral.js';
import { criarSecaoCategorias } from './components/categorias.js';
import { criarListaVideos, adicionarFiltros } from './components/listaVideos.js';
import { videos } from './videos.js';

const app = document.getElementById("app");

// Header
app.appendChild(criarHeader());

// Menu lateral
const menuWrapper = document.createElement("div");
menuWrapper.className = "menu__container-wrapper";
menuWrapper.appendChild(criarMenuLateral());
app.appendChild(menuWrapper);

// Categorias
app.appendChild(criarSecaoCategorias());

// Lista de vídeos
app.appendChild(criarListaVideos(videos));

// Filtros
adicionarFiltros();
