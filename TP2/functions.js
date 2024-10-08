document.addEventListener("DOMContentLoaded", function() {

    let nav = document.getElementById('nav');
    nav.classList.add("no-visible");
    let detalle_carrito = document.getElementById('detalle_carrito');
    let detalle_perfil_avatar = document.getElementById('detalle_perfil_avatar');

    detalle_carrito.classList.add("no-visible");
    detalle_perfil_avatar.classList.add("no-visible");

    let burger = document.getElementById('section_hamburguesa');
    burger.addEventListener('click', function() {
        nav.classList.toggle("no-visible");
    });
    /********************************************************* */
    let btn_carrito = document.getElementById('btn-carrito');
    btn_carrito.addEventListener('click', function() {
        detalle_carrito.classList.remove("no-visible");
    });
    let btn_cerrar_carrito = document.getElementById('btn-cerrar-detalle-carrito');
    btn_cerrar_carrito.addEventListener('click', function() {
        detalle_carrito.classList.add("no-visible");
    });
    /********************************************************* */
    let btn_perfil = document.getElementById('btn-perfil-detalle');
    btn_perfil.addEventListener('click', function() {
        detalle_perfil_avatar.classList.remove("no-visible");
    });
    let avatar_header_perfil = document.querySelectorAll('.avatar_header');
    avatar_header_perfil[0].addEventListener('click', function() {
        detalle_perfil_avatar.classList.remove("no-visible");
    });
    let btn_cerrar_perfil = document.getElementById('btn-cerrar-detalle-perfil');
    btn_cerrar_perfil.addEventListener('click', function() {
        detalle_perfil_avatar.classList.add("no-visible");
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

document.getElementById('4_en_linea_nav').addEventListener('click', loadJuegoEnEjecucion);

function loadJuegoEnEjecucion() {

    fetch('../TP2/juego_ejecucion.html').then(

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

document.getElementById('btn-home').addEventListener('click', loadHome);

function loadHome() {
    fetch('../TP2/home.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                        cargar_cards_crear_carruseles();
                        document.querySelectorAll(".btn_carrusel_ant").forEach(function(btn) {
                            btn.addEventListener('click', translateFunctionAnt);
                            btn.classList.add("no-visible");
                        });
                        document.querySelectorAll(".btn_carrusel_sig").forEach(function(btn) {
                            btn.addEventListener('click', translateFunctionSig);
                        });
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
/**********************fin - AJAX NAV***************************/
/*********************************************************/
let categorias = [{
        "id": 1,
        "nombre": "Accion",
        "cards": [{
                "id": 1,
                "gratis": false,
                "precio": 2000,
                "descuento": 0,
                "nombre": "Pockemon"
            },
            {
                "id": 2,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 3,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Pixel Warfare"
            },
            {
                "id": 4,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 5,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 6,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 7,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 8,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 9,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            },
            {
                "id": 10,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            }
        ]
    },
    {
        "id": 1,
        "nombre": "Aventuras",
        "cards": [{
                "id": 1,
                "gratis": false,
                "precio": 2000,
                "descuento": 0,
                "nombre": "Pockemon"
            },
            {
                "id": 2,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            }
        ]
    },
    {
        "id": 1,
        "nombre": "2 Jugadores",
        "cards": [{
                "id": 1,
                "gratis": false,
                "precio": 2000,
                "descuento": 0,
                "nombre": "Pockemon"
            },
            {
                "id": 2,
                "gratis": true,
                "precio": 0,
                "descuento": 0,
                "nombre": "Ninja Hands"
            }
        ]
    }
];

function cargar_cards_crear_carruseles() {
    let section_carrusel = document.getElementById('section_carrusel');

    categorias.forEach(function(cat) {
        /***************************************************************************************************/
        /*Titulo categoria carrusel*/
        let h3 = document.createElement('h3');
        let nom_categoria = document.createTextNode(cat.nombre);
        h3.appendChild(nom_categoria);
        /***************************************************************************************************/

        /***************************************************************************************************/
        let div_container_carrusel = document.createElement('div');
        div_container_carrusel.classList.add("container_carrusel");


        /*Div carrusel, el que tiene la animacion y directamente dentro las cards*/
        let carrusel = document.createElement('div');
        carrusel.classList.add("carrusel_cards");
        carrusel.classList.add("translate");
        carrusel.setAttribute('data-clicks', '0');
        carrusel.setAttribute('data-valpx', '0');

        /*Botones del carrusel*/
        let btn_carrusel_ant = document.createElement('button');
        let text_btn_ant = document.createTextNode("<");
        btn_carrusel_ant.appendChild(text_btn_ant);
        btn_carrusel_ant.classList.add("btn_carrusel_ant");

        let btn_carrusel_sig = document.createElement('button');
        let text_btn_sig = document.createTextNode(">");
        btn_carrusel_sig.appendChild(text_btn_sig);
        btn_carrusel_sig.classList.add("btn_carrusel_sig");
        if(cat.cards.length<4){
            btn_carrusel_sig.classList.add("no-visible");
        }

        /*Recorro las cards de la categoria actual, y las creo*/
        cat.cards.forEach(function(card) {
            let article_card = document.createElement('article');
            article_card.classList.add("card");
            /*etiqueta*/
            if (card.gratis === false) { //si es una crad de un juego pago, se le debe agregar la etiqueta...
                let article_etiqueta = document.createElement('article');
                article_etiqueta.classList.add("contenedor_etiqueta_card");

                let div = document.createElement('div');
                div.classList.add("etiqueta_card");

                let text_precio_o_agregado = document.createTextNode(card.precio);
                div.appendChild(text_precio_o_agregado);
                article_etiqueta.appendChild(div);

                /*let svg = document.createElement('svg');
                svg.setAttribute('viewBox', '0 0 10 44');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                let svg_path = document.createElement('path');
                svg_path.setAttribute('d', 'M-1.33514e-05 0H9.12024L-1.33514e-05 43.3137V0Z');
                svg_path.setAttribute('fill', '#CE5713');
                svg.appendChild(svg_path);
                article_etiqueta.appendChild(svg);*/
                let triangulo_img = document.createElement('img');
                triangulo_img.setAttribute('src', 'uploads/triangulo.png');
                article_etiqueta.appendChild(triangulo_img);

                article_card.appendChild(article_etiqueta); //lo agrego a la card
            } //sino no es necesario que se cree...
            /*imagen*/
            let img = document.createElement('img');
            img.setAttribute('src', 'uploads/cards/card_img_carrusel_' + card.id + '.png');
            img.setAttribute('data', 'card_img');

            article_card.appendChild(img); //lo agrego a la card
            /*div inferior con detalle*/
            let div_inferior = document.createElement('div');
            div_inferior.classList.add("rectangulo_inferior_card");
            let p_titulo = document.createElement('p');
            let text_tit = document.createTextNode(card.nombre);
            p_titulo.appendChild(text_tit);
            div_inferior.appendChild(p_titulo);
            let btn_icono = document.createElement('button');
            let icono = document.createElement('img');
            if (card.gratis === false) {
                icono.setAttribute('src', 'uploads/iconos/boton-de-agregado-carrito.png');
                icono.setAttribute('width', '54');
                icono.setAttribute('height', '54');
            } else {
                icono.setAttribute('src', 'uploads/iconos/boton-de-play.png');
                icono.setAttribute('width', '60');
                icono.setAttribute('height', '60');
            }

            btn_icono.appendChild(icono);
            div_inferior.appendChild(btn_icono);
            article_card.appendChild(div_inferior); //lo agrego a la card

            /*guardo la card en el carrusel*/
            carrusel.appendChild(article_card);
        });


        div_container_carrusel.appendChild(btn_carrusel_ant);
        div_container_carrusel.appendChild(btn_carrusel_sig);
        div_container_carrusel.appendChild(carrusel);
        /***************************************************************************************************/

        /***************************************************************************************************/
        //muestro en section lo creado
        section_carrusel.appendChild(h3);
        section_carrusel.appendChild(div_container_carrusel);
    });
}

function translateFunctionSig() {
    let padre = this.parentElement;
    let btn_ant = padre.children[0];
    let btn_sig = padre.children[1];
    let div_carrusel = padre.children[2];
    //me traigo los valores actualizados de los atributos del carrusel, para saber desde donde partir
    let data_cont_atributo = div_carrusel.getAttribute('data-clicks');
    let translate_px = parseInt(div_carrusel.getAttribute('data-valpx'));
    let contClicks = data_cont_atributo;
    if (contClicks == 0) {
        btn_ant.classList.remove("no-visible");
        btn_ant.classList.add("visible");
    }
    let cantidad_cards_por_ver = (div_carrusel.children.length) - 4;
    let cantidad_de_clicks = cantidad_cards_por_ver / 1.5;
    if (contClicks <= cantidad_de_clicks) {
        if (contClicks == cantidad_de_clicks) { //si es el ultimo click para ver la ultima card, no debe deslizarse "una card y media", sino solo "media"
            translate_px = translate_px + (-106);
        } else {
            translate_px = translate_px + (-371);
        }
        //animacion, se desliza el carrusel..NEXT->
        div_carrusel.style.transform = "translateX(" + translate_px + "px)";
        div_carrusel.style.transition = " all 1s"
        contClicks++;
    }
    if (contClicks > cantidad_de_clicks) { //estoy viendo la ultima card...
        btn_sig.classList.remove("visible");
        btn_sig.classList.add("no-visible");
    }
    //setteo valores a los atributos para que queden actualizados para el siguiente click(sig o ant)
    div_carrusel.setAttribute('data-clicks', contClicks);
    div_carrusel.setAttribute('data-valpx', translate_px);
}

let llego_a_la_ultima = false;

function translateFunctionAnt() {
    let padre = this.parentElement;
    let btn_ant = padre.children[0];
    let btn_sig = padre.children[1];
    let div_carrusel = padre.children[2];

    let data_cont_atributo = div_carrusel.getAttribute('data-clicks');
    if (data_cont_atributo > 0) {
        let translate_px = parseInt(div_carrusel.getAttribute('data-valpx'));
        let contClicks = data_cont_atributo;

        let cantidad_cards_por_ver = (div_carrusel.children.length) - 4;
        let cantidad_de_clicks = cantidad_cards_por_ver / 1.5;
        if (contClicks > cantidad_de_clicks) { //si ESTOY viendo la ultima card, solo retrocedo "media card"...
            translate_px = translate_px + 106;
            llego_a_la_ultima = true;
            btn_sig.classList.remove("no-visible");
            btn_sig.classList.add("visible");
        } else {
            if ((contClicks - 1) == 0) { //estoy A 1 CLICK del principio del carrusel y no podre retroceder mas..
                /*******************esta parte queda comentada porque se me mezclan
                las cuentas si a mitad de carrusel avanzo y retrocedo otra vez********************** */
                /* if(llego_a_la_ultima===true){//si llegue a ver la ultima card, el ultimo calculo del siguiente click fue de 100px y no de 371 ("una card y media")
                    translate_px=translate_px+106;
                    llego_a_la_ultima=false;
                }else{*/ //si no llegue al final del carrusel no se hizo esa suma final de 100 px en vez de 371..
                translate_px = translate_px + 371;
                /* }*/
                //como estoy a 1 click del final entonces oculto el boton "ant" para no retroceder más...
                btn_ant.classList.remove("visible");
                btn_ant.classList.add("no-visible");
            } else {
                translate_px = translate_px + 371;
            }
        }


        //animacion, se desliza el carrusel..<-ANT
        this.parentElement.children[2].style.transform = "translateX(" + translate_px + "px)";
        this.parentElement.children[2].style.transition = " all 1s"

        //setteo valores a los atributos para que queden actualizados para el siguiente click(sig o ant)
        div_carrusel.setAttribute('data-clicks', contClicks - 1);
        div_carrusel.setAttribute('data-valpx', translate_px);
    }
}