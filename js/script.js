// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];


// TODO 1: escreva a função render(filtro) que preenche a #lista com um <li>
//         para cada curso cujo NOME contenha o filtro (use filter + map).
//         Se nenhum curso passar, mostre um <li> com "Nada encontrado".
//
// TODO 2: chame render() ao carregar a página e a cada evento "input" na busca.

// escreva seu código aqui
const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(termo = "") {
    const textoBusca = termo.trim().toLowerCase();
    
    const filtrados = cursos.filter((curso) =>  {
        const nomeCurso = (curso.nome || curso.titulo || String(curso)).toLowerCase();
        return nomeCurso.includes(textoBusca);
    });

    if (filtrados.length === 0) {
      lista.innerHTML = `<p>Nada encontrado </p>`
      return;
    }
lista.innerHTML = filtrados
  .map((curso) =>  {
    const nomeCurso = curso.nome || curso.titulo || String(curso);
    return `<li class="item-curso">${nomeCurso}</li>`;
   })
   .join("");
   busca.addEventListener("input", () => {
    render(busca.value);
  });
  
  render();

}
