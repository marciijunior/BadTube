export function criarSecaoCategorias() {
  const section = document.createElement("section");
  section.className = "superior__secao__container";
  section.innerHTML = `
    <div class="superior__itens">
      <a href="#" name="Tudo" class="superior__item">Tudo</a>
      <a href="#" name="Debates" class="superior__item">Debates</a>
      <a href="#" name="Ao Vivo" class="superior__item">Ao Vivo</a>
      <a href="#" name="Podcasts" class="superior__item">Podcasts</a>
      <a href="#" name="Front-end" class="superior__item">Front-end</a>
      <a href="#" name="Mobile" class="superior__item">Mobile</a>
      <a href="#" name="Data Science" class="superior__item">Data Science</a>
      <a href="#" name="Apps" class="superior__item">Apps</a>
      <a href="#" name="Programação" class="superior__item">Programação</a>
      <a href="#" name="Inteligência Artificial" class="superior__item">Inteligência Artificial</a>
      <a href="#" name="Inovação" class="superior__item">Inovação</a>
    </div>
  `;
  return section;
}
