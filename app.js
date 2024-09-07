function pesquisar() {
    // Essa função é responsável por pegar os dados da pesquisa e exibir os resultados na página.
    
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão mostrados.
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value  

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou do esporte</p>"
    return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()
   
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let titulo = "";
    let descricao = ""; 
    let tags = ""
    
    for (let dado of dados) { // Itera sobre cada dado da pesquisa.
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
         // Cria um novo elemento div para cada resultado, formatando-o com as informações do dado.
     resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
     
    console.log(dado.titulo.includes(campoPesquisa))
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados; // Insere os resultados formatados na seção HTML.
  }
