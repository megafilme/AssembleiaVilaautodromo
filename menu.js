document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById("btn-menu");
    const menuMobile = document.getElementById("menu-mobile");
    const overlayMenu = document.getElementById("overlay-menu");
    const btnFecharMenu = document.querySelector("#menu-mobile .btn-fechar");
    const menuLateral = document.querySelector('.menu-lateral');

    // Função para abrir o menu mobile
    function abrirMenuMobile() {
        menuMobile.classList.add("abrir-menu");
    }

    // Função para fechar o menu mobile
    function fecharMenuMobile() {
        menuMobile.classList.remove("abrir-menu");
    }

    // Evento de clique no botão de abrir menu mobile
    btnMenu.addEventListener("click", abrirMenuMobile);

    // Evento de clique no botão de fechar menu mobile
    btnFecharMenu.addEventListener("click", fecharMenuMobile);

    // Evento de clique no overlay para fechar o menu mobile
    overlayMenu.addEventListener("click", fecharMenuMobile);

    // Evento de clique no ícone do menu lateral
    menuLateral.addEventListener('click', function() {
        // Alternar a classe 'abrir-menu' no menu mobile
        menuMobile.classList.toggle('abrir-menu');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuLateral = document.querySelector('.menu-lateral');
    const menuMobile = document.querySelector('#menu-mobile');
    
    // Evento de clique no ícone do menu lateral
    menuLateral.addEventListener('click', function() {
        // Alternar a classe 'abrir-menu' no menu mobile
        menuMobile.classList.toggle('abrir-menu');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById("btn-menu");
    const menuMobile = document.getElementById("menu-mobile");
    const overlay = document.getElementById("overlay");

    // Função para abrir o menu e ativar o overlay
    function abrirMenu() {
        menuMobile.classList.add("abrir-menu");
        overlay.classList.add("ativo");
    }

    // Função para fechar o menu e desativar o overlay
    function fecharMenu() {
        menuMobile.classList.remove("abrir-menu");
        overlay.classList.remove("ativo");
    }

    // Evento de clique no botão de menu para abrir ou fechar o menu
    btnMenu.addEventListener("click", function() {
        if (menuMobile.classList.contains("abrir-menu")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    // Evento de clique no overlay para fechar o menu
    overlay.addEventListener("click", fecharMenu);
});
