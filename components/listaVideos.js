// Remova o axios porque não vai usar mais
// import axios from 'axios';

// Função para criar a lista, recebe os vídeos como parâmetro
export function criarListaVideos(videos = []) {
  const ul = document.createElement('ul');
  ul.className = 'videos__container';

  videos.forEach(video => {
    const li = document.createElement('li');
    li.className = 'videos__item';
    li.innerHTML = `
      <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
      <div class="descricao-video">
        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
        <h3 class="titulo-video">${video.titulo}</h3>
        <p class="titulo-canal">${video.descricao}</p>
        <p class="categoria" hidden>${video.categoria}</p>
      </div>
    `;
    ul.appendChild(li);
  });

  return ul;
}

// Função para adicionar os filtros — exporte para usar no main.js
export function adicionarFiltros() {
  const barraDePesquisa = document.querySelector(".pesquisar__input");
  if (barraDePesquisa) {
    barraDePesquisa.addEventListener("input", filtrarPesquisa);
  }

  const botoesCategoria = document.querySelectorAll(".superior__item");
  botoesCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
  });
}

function filtrarPesquisa() {
  const barraDePesquisa = document.querySelector(".pesquisar__input");
  const videos = document.querySelectorAll(".videos__item");

  if (barraDePesquisa.value != "") {
    for (let video of videos) {
      let titulo = video
        .querySelector(".titulo-video")
        .textContent.toLowerCase();
      let valorFiltro = barraDePesquisa.value.toLowerCase();

      video.style.display = titulo.includes(valorFiltro) ? "" : "none";
    }
  } else {
    for (let video of videos) {
      video.style.display = "";
    }
  }
}

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll(".videos__item");
  for (let video of videos) {
    let categoria = video.querySelector(".categoria").textContent.toLowerCase();
    let valorFiltro = filtro.toLowerCase();

    video.style.display =
      (!categoria.includes(valorFiltro) && valorFiltro != "tudo")
        ? "none"
        : "";
  }
}

// Remove o trecho do axios/fetch — não será mais usado
// axios.get('http://localhost:3000/videos')
//   .then(response => {
//     const app = document.getElementById('app');
//     app.appendChild(criarListaVideos(response.data));
//     adicionarFiltros(); // <-- Adiciona os filtros após montar os vídeos
//   });
