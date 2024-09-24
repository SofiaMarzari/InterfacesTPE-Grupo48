document.addEventListener("DOMContentLoaded", function() {

    let nav = document.getElementById('nav');
    nav.classList.add("no-visible");
    let detalle_carrito = document.getElementById('detalle_carrito');
    detalle_carrito.classList.add("no-visible");
    let burger = document.getElementById('section_hamburguesa');
    burger.addEventListener('click', function() {
        nav.classList.toggle("no-visible");
    });
    let btn_carrito = document.getElementById('btn-carrito');
    btn_carrito.addEventListener('click', function() {
        detalle_carrito.classList.remove("no-visible");
    });
    let btn_cerrar_carrito = document.getElementById('btn-cerrar-detalle-carrito');
    btn_cerrar_carrito.addEventListener('click', function() {
        detalle_carrito.classList.add("no-visible");
    });

    loadLogin();
});

let botones_nav = document.querySelectorAll('.btn-nav');
let container_AJAX = document.getElementById('container_ajax');
/**********************AJAX NAV***************************/
/*********************************************************/
function loadLogin(event) {
    // event.preventDefault();

    fetch('../TP2/login.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                        document.getElementById('btn_registrarse_nav').addEventListener('click', loadRegistrarse);
                    }
                )
            } else {
                container_AJAX.innerHTML = '<h1>404 - Not Found!</h1>';
            }
        }
    ).catch(function(response) {
        container_AJAX.innerHTML = '<h1>Error 505</h1>';
    })
}

function loadRegistrarse() {

    fetch('../TP2/registro.html').then(

        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                    }
                )
            } else {
                container_AJAX.innerHTML = '<h1>404 - Not Found!</h1>';
            }
        }
    ).catch(function(response) {
        container_AJAX.innerHTML = '<h1>Error 505</h1>';
    })
}

botones_nav.forEach(function(btn) {
    btn.addEventListener('click', loadCategoria);
});

function loadCategoria(event) {
    event.preventDefault();
    let id_categoria = this.getAttribute('data-id');
    /*se buscan los datos de la categoria segun su id_categoria...*/

    fetch('../TP2/categoria.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                    }
                )
            } else {
                container_AJAX.innerHTML = '<h1>404 - Not Found!</h1>';
            }
        }
    ).catch(function(response) {
        container_AJAX.innerHTML = '<h1>Error 505</h1>';
    })
}
/**********************AJAX NAV***************************/
/*********************************************************/