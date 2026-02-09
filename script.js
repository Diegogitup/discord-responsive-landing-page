const botoes = document.querySelectorAll(".nav_dd_arrow");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {

    // =============================
    // FECHA TODOS PRIMEIRO
    // =============================
    botoes.forEach((b) => {
      if (b !== botao) {
        b.classList.remove("teste");

        const liOutro = b.closest("li");

        const submenuOutro = liOutro.querySelector(
          ".protecao, .missoes-recursos-list, .suporte-recursos-list, .blog-colecoes-list, .desenvolvedores-colecoes-list"
        );

        if (submenuOutro) {
          submenuOutro.classList.remove("ativo");
        }
      }
    });


    // =============================
    // SEU CÓDIGO ORIGINAL (igual)
    // =============================

    botao.classList.toggle("teste");

    const header = botao.closest(
      ".seta-recursos, .missoes-recursos, .suporte-recursos, .blog-recursos, .desenvolvedores-recursos"
    );

    if (!header) return;

    header.classList.remove("piscar");
    void header.offsetWidth;
    header.classList.add("piscar");

    const li = botao.closest("li");

    const submenu = li.querySelector(
      ".protecao, .missoes-recursos-list, .suporte-recursos-list, .blog-colecoes-list, .desenvolvedores-colecoes-list"
    );

    if (!submenu) return;

    submenu.classList.toggle("ativo");
  });
});




const menu = document.querySelector(".espelho-de-fundo");
const btnHamburguer = document.querySelector(".img-hamburguer");
const btnFechar = document.querySelector(".close_icon");


btnHamburguer.addEventListener("click", () => {
    menu.classList.add("menuAtivo");
    console.log("ativou")
   
})



btnFechar.addEventListener("click", () => {
    menu.classList.remove("menuAtivo");
    console.log("desativado")
})

// =====================================
// FECHAR SUBMENU CLICANDO FORA
// =====================================
document.addEventListener("click", (e) => {

  // verifica se clicou dentro de algum <li> do menu
  const clicouDentro = e.target.closest("li");

  if (!clicouDentro) {

    // fecha todas as setas
    botoes.forEach((b) => {
      b.classList.remove("teste");

      const li = b.closest("li");

      const submenu = li.querySelector(
        ".protecao, .missoes-recursos-list, .suporte-recursos-list, .blog-colecoes-list, .desenvolvedores-colecoes-list"
      );

      if (submenu) {
        submenu.classList.remove("ativo");
      }
    });

  }
});

// =====================================
// FECHAR AO SAIR COM O MOUSE (mouseleave)
// =====================================
const submenus = document.querySelectorAll(
  ".protecao, .missoes-recursos-list, .suporte-recursos-list, .blog-colecoes-list, .desenvolvedores-colecoes-list"
);

submenus.forEach((submenu) => {
  submenu.addEventListener("mouseleave", () => {

    botoes.forEach((b) => {
      b.classList.remove("teste");

      const li = b.closest("li");

      const sm = li.querySelector(
        ".protecao, .missoes-recursos-list, .suporte-recursos-list, .blog-colecoes-list, .desenvolvedores-colecoes-list"
      );

      if (sm) sm.classList.remove("ativo");
    });

  });
});



// =====================================
// FECHAR AO ROLAR SCROLL (rodinha do mouse)
// =====================================
window.addEventListener("wheel", () => {

  botoes.forEach((b) => {
    b.classList.remove("teste");

    const li = b.closest("li");

    const submenu = li.querySelector(
      ".protecao, .missoes-recursos-list, .suporte-recursos-list, .blog-colecoes-list, .desenvolvedores-colecoes-list"
    );

    if (submenu) submenu.classList.remove("ativo");
  });

});

