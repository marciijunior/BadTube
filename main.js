import { criarHeader } from './components/header.js';
import { criarMenuLateral } from './components/menuLateral.js';
import { criarSecaoCategorias } from './components/categorias.js';
import { criarListaVideos, adicionarFiltros } from './components/listaVideos.js';
import { videos } from './videos.js';  // importe seus dados fixos

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

// Lista de vídeos — passando o array local
app.appendChild(criarListaVideos(videos));

// Ativa os filtros (busca e categorias)
adicionarFiltros();
