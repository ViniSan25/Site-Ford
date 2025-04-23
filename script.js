function toggleEspecificacoes(botao) {
    const div = botao.nextElementSibling;
  
    if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "block";
      botao.textContent = "ocultar";
    } else {
      div.style.display = "none";
      botao.textContent = "especificações";
    }
  }


  let ultimoScroll = 0;

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollAtual = window.pageYOffset;
  
    if (scrollAtual > ultimoScroll && scrollAtual > 100) {
      // Rolando para baixo
      header.classList.add("oculto");
    } else {
      // Rolando para cima
      header.classList.remove("oculto");
    }
  
    ultimoScroll = scrollAtual;
  });

