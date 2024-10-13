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
let obj_categorias =
[
    {
            "id": 1,
            "nombre": "accion",
            "cards": [
                {
                    "id": 1,
                    "gratis": false,
                    "precio": 2500,
                    "porcentaje_descuento": 0,
                    "nombre": "10 Minutes Terror",
                    "obtenido": false
                },
                {
                    "id": 2,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Chiken Dense",
                    "obtenido": false
                },
                {
                    "id": 3,
                    "gratis": false,
                    "precio": 2500,
                    "porcentaje_descuento": 20,
                    "nombre": "Cursed Treasty 3",
                    "obtenido": true
                },
                {
                    "id": 4,
                    "gratis": false,
                    "precio": 1000,
                    "porcentaje_descuento": 0,
                    "nombre": "Ninja Hands",
                    "obtenido": true
                },
                {
                    "id": 5,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Shorties Killer",
                    "obtenido": false
                },
                {
                    "id": 6,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Super Spin",
                    "obtenido": false
                },
                {
                    "id": 7,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Castle Wars",
                    "obtenido": false
                },
                {
                    "id": 8,
                    "gratis": false,
                    "precio": 10000,
                    "porcentaje_descuento": 50,
                    "nombre": "Build & Crush",
                    "obtenido": false
                },
                {
                    "id": 9,
                    "gratis": false,
                    "precio": 2000,
                    "porcentaje_descuento": 0,
                    "nombre": "Archer Master",
                    "obtenido": true
                },
                {
                    "id": 10,
                    "gratis": false,
                    "precio": 1900,
                    "porcentaje_descuento": 0,
                    "nombre": "Bloc Ops",
                    "obtenido": false
                }
                ,
                {
                    "id": 11,
                    "gratis": false,
                    "precio": 99,
                    "porcentaje_descuento": 0,
                    "nombre": "Shadow Ninja",
                    "obtenido": false
                },
                {
                    "id": 12,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Ninja Parkour",
                    "obtenido": false
                }
            ]
        },
        {
            "id": 1,
            "nombre": "aventura",
            "cards": [
                {
                    "id": 1,
                    "gratis": false,
                    "precio": 2000,
                    "porcentaje_descuento": 0,
                    "nombre": "Pikel Warfare",
                    "obtenido": true
                },
                {
                    "id": 2,
                    "gratis": true,
                    "precio": 4200,
                    "porcentaje_descuento": 0,
                    "nombre": "Sausage Dog",
                    "obtenido": false
                },
                {
                    "id": 3,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Monster Mash",
                    "obtenido": false
                },
                {
                    "id": 4,
                    "gratis": false,
                    "precio": 500,
                    "porcentaje_descuento": 0,
                    "nombre": "Extraordinary",
                    "obtenido": false
                },
                {
                    "id": 5,
                    "gratis": true,
                    "precio": 720,
                    "porcentaje_descuento": 0,
                    "nombre": "Duck Life",
                    "obtenido": false
                }
                ,
                {
                    "id": 6,
                    "gratis": false,
                    "precio": 720,
                    "porcentaje_descuento": 0,
                    "nombre": "Lineaje II",
                    "obtenido": true
                },
                {
                    "id": 7,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Metro Escape",
                    "obtenido": false
                }
            ]
        },
        {
            "id": 1,
            "nombre": "2 Jugadores",
            "cards": [
                {
                    "id": 1,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Futbolito",
                    "obtenido": false
                },
                {
                    "id": 2,
                    "gratis": false,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "City Racing",
                    "obtenido": true
                },
                {
                    "id": 3,
                    "gratis": false,
                    "precio": 5000,
                    "porcentaje_descuento": 20,
                    "nombre": "Basketball Seen",
                    "obtenido": false
                },
                {
                    "id": 4,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Boxing v2",
                    "obtenido": false
                },
                {
                    "id": 5,
                    "gratis": false,
                    "precio": 3700,
                    "porcentaje_descuento": 20,
                    "nombre": "Drunken Box",
                    "obtenido": false
                },
                {
                    "id": 6,
                    "gratis": false,
                    "precio": 2500,
                    "porcentaje_descuento": 25,
                    "nombre": "Ajedrez",
                    "obtenido": false
                },
                {
                    "id": 7,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Sky Balls",
                    "obtenido": false
                },
                {
                    "id": 8,
                    "gratis": false,
                    "precio": 1010,
                    "porcentaje_descuento": 25,
                    "nombre": "Pill Soccer",
                    "obtenido": false
                },
                {
                    "id": 9,
                    "gratis": false,
                    "precio": 5300,
                    "porcentaje_descuento": 0,
                    "nombre": "Tank Wars",
                    "obtenido": false
                },
                {
                    "id": 10,
                    "gratis": false,
                    "precio": 5300,
                    "porcentaje_descuento": 0,
                    "nombre": "Mini Battles",
                    "obtenido": true
                },
                {
                    "id": 11,
                    "gratis": true,
                    "precio": 0,
                    "porcentaje_descuento": 0,
                    "nombre": "Crash Cars",
                    "obtenido": false
                }
        ]
    }
];
let obj_categorias_recomendados =
[
    {
        "id": 1,
        "nombre": "aventura",
        "cards": [
            {
                "id": 1,
                "gratis": false,
                "precio": 2000,
                "porcentaje_descuento": 0,
                "nombre": "Pikel Warfare",
                "obtenido": true
            },
            {
                "id": 2,
                "gratis": true,
                "precio": 4200,
                "porcentaje_descuento": 0,
                "nombre": "Sausage Dog",
                "obtenido": false
            },
            {
                "id": 3,
                "gratis": true,
                "precio": 0,
                "porcentaje_descuento": 0,
                "nombre": "Monster Mash",
                "obtenido": false
            },
            {
                "id": 4,
                "gratis": false,
                "precio": 500,
                "porcentaje_descuento": 0,
                "nombre": "Extraordinary",
                "obtenido": false
            },
            {
                "id": 5,
                "gratis": true,
                "precio": 720,
                "porcentaje_descuento": 0,
                "nombre": "Duck Life",
                "obtenido": false
            }
            ,
            {
                "id": 6,
                "gratis": false,
                "precio": 720,
                "porcentaje_descuento": 0,
                "nombre": "Lineaje II",
                "obtenido": true
            },
            {
                "id": 7,
                "gratis": true,
                "precio": 0,
                "porcentaje_descuento": 0,
                "nombre": "Metro Escape",
                "obtenido": false
            }
        ]
    }
];
let botones_nav = document.querySelectorAll('.btn-nav');
let container_AJAX = document.getElementById('container_ajax');
/**********************AJAX NAV***************************/
/*********************************************************/
function loadLogin(event) {
    //event.preventDefault();

    fetch('../TP2/login.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                        document.getElementById('btn_registrarse_nav').addEventListener('click', loadRegistrarse);
                        let form = document.querySelector('#form');
                        form.addEventListener('submit', msjIniciarSesion); 
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
                        document.getElementById('btn_iniciarSesion_nav').addEventListener('click', loadLogin);
                        let form = document.querySelector('#form');
                        form.addEventListener('submit', msjRegistro); 
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

function msjIniciarSesion(e){
    e.preventDefault();
    document.querySelector("#mensaje-login").innerHTML = ("¡¡ Ingreso con exito !!");
    document.querySelector("#mensaje-login").classList.add("mensaje-animacion");
}

function msjRegistro(e){
    e.preventDefault();
    document.querySelector("#mensaje-login").innerHTML = ("¡¡ Registrado con exito !!");
    document.querySelector("#mensaje-login").classList.add("mensaje-animacion");
}


document.getElementById('4_en_linea_nav').addEventListener('click', loadJuegoEnEjecucion);

function loadJuegoEnEjecucion() {

    fetch('../TP2/juego_ejecucion.html').then(

        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                        cargar_cards_crear_carruseles(obj_categorias_recomendados, 'section_carrusel_recomendados');
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


document.getElementById('btn-home').addEventListener('click', loadHome);

function loadHome() {
    fetch('../TP2/home.html').then(
        function(response) {
            if (response.ok) {
                response.text().then(
                    function(h) {
                        container_AJAX.innerHTML = h;
                        document.querySelector("header").classList.add("header-blur");
                        document.querySelector("footer").classList.add("footer-blur");
                    }
                )
            } else {
                container_AJAX.innerHTML = '<h1>404 - Not Found!</h1>';
            }
        }
         /** JS DE EL LOADER **/
        ,setTimeout(() => {
            const loader = document.querySelector(".container");
            loader.classList.add("container--hidden");
            loader.addEventListener("trasitionend", () => {
                document.body.removeChild(loader);
            })

            document.querySelector(".container-main").classList.remove("container-main-blur");
            document.querySelector("header").classList.remove("header-blur");
            document.querySelector("footer").classList.remove("footer-blur");

            cargar_cards_crear_carruseles(obj_categorias, 'section_carrusel');
            document.querySelectorAll(".btn_carrusel_ant").forEach(function(btn) {
                btn.addEventListener('click', translateFunctionAnt);
                btn.classList.add("no-visible");
            });
            document.querySelectorAll(".btn_carrusel_sig").forEach(function(btn) {
                btn.addEventListener('click', translateFunctionSig);
            });

            }, 5000)
            
            // Comentario de prueba para pushear y ver si se actualiza bien todo
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

function cargar_cards_crear_carruseles(categorias, nombre_section_contenedor) {
    let section_carrusel = document.getElementById(nombre_section_contenedor);

    categorias.forEach(function(cat) {
        /***************************************************************************************************/
        /*Titulo categoria carrusel*/
        if(nombre_section_contenedor!='section_carrusel_recomendados'){
            let h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(cat.nombre.charAt(0).toUpperCase() + cat.nombre.slice(1)));
            section_carrusel.appendChild(h3);
        }
        
        /***************************************************************************************************/

        /***************************************************************************************************/
        let div_container_carrusel = document.createElement('div');
        div_container_carrusel.classList.add("container_carrusel");


        /*Div carrusel, el que tiene la animacion y directamente dentro las cards*/
        let carrusel = document.createElement('div');
        carrusel.classList.add("carrusel_cards");
        carrusel.classList.add("translate");
        carrusel.setAttribute('data-clicks', '1');
        carrusel.setAttribute('data-valpx', '0');

        /*Botones del carrusel*/
        let btn_carrusel_ant = document.createElement('button');
        btn_carrusel_ant.appendChild(document.createTextNode("<"));
        btn_carrusel_ant.classList.add("btn_carrusel_ant");

        let btn_carrusel_sig = document.createElement('button');
        btn_carrusel_sig.appendChild(document.createTextNode(">"));
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

                let triangulo_img = document.createElement('img');
                if(card.obtenido){
                    div.appendChild(document.createTextNode("Obtenido !"));
                    div.classList.add("etiqueta_card_agregado");
                    triangulo_img.setAttribute('src', 'uploads/triangulo_add.png');
                }else{
                    if(card.porcentaje_descuento>0){
                        let precio_antiguo = document.createElement("p");
                        precio_antiguo.appendChild(document.createTextNode("$"+card.precio));
                        precio_antiguo.classList.add("descuento");
                        div.appendChild(precio_antiguo);
                        let precio_con_descuento = parseInt(card.precio)-((parseInt(card.precio)/100)*card.porcentaje_descuento);
                        div.appendChild(document.createTextNode("$"+precio_con_descuento));
                    }else{
                        div.appendChild(document.createTextNode("$"+card.precio));
                    }
                    div.classList.add("etiqueta_card_pago");
                    triangulo_img.setAttribute('src', 'uploads/triangulo.png');
                }
                
                article_etiqueta.appendChild(div);
                article_etiqueta.appendChild(triangulo_img);

                article_card.appendChild(article_etiqueta); //lo agrego a la card
            } //sino no es necesario que se cree...
            /*imagen*/
            let img = document.createElement('img');
            img.setAttribute('src', 'uploads/cards/card_img_carrusel_' + cat.nombre + '_' + card.id + '.png');
            img.setAttribute('data', 'card_img');

            article_card.appendChild(img); //lo agrego a la card
            /*div inferior con detalle*/
            let div_inferior = document.createElement('div');
            div_inferior.classList.add("rectangulo_inferior_card");
            let p_titulo = document.createElement('p');
            p_titulo.appendChild(document.createTextNode(card.nombre));
            div_inferior.appendChild(p_titulo);
            let btn_icono = document.createElement('button');
            let icono = document.createElement('img');
            if (card.gratis === false) {
                if(card.obtenido){
                    icono.setAttribute('src', 'uploads/marca-de-verificacion.png');
                }else{
                    icono.setAttribute('src', 'uploads/iconos/boton-de-agregado-carrito.png');
                    icono.classList.add("icono_maschico");
                }
            } else {
                icono.setAttribute('src', 'uploads/iconos/boton-de-play.png');
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
        section_carrusel.appendChild(div_container_carrusel);
    });
}

let llego_a_la_ultima = false;
function translateFunctionSig() {
    let padre = this.parentElement;
    let btn_ant = padre.children[0];
    let btn_sig = padre.children[1];
    let div_carrusel = padre.children[2];
    //me traigo los valores actualizados de los atributos del carrusel, para saber desde donde partir
    let data_cont_atributo = div_carrusel.getAttribute('data-clicks');
    let translate_px = parseInt(div_carrusel.getAttribute('data-valpx'));
    let contClicks = data_cont_atributo;
    let cantidad_cards_por_ver = (div_carrusel.children.length) - 4;
    let cantidad_de_clicks = Math.ceil(cantidad_cards_por_ver/1.5);
    let porcentaje = 100/cantidad_cards_por_ver;
    if (contClicks == 1) {
        btn_ant.classList.remove("no-visible");
        btn_ant.classList.add("visible");
    }
    if (contClicks <= cantidad_de_clicks) {
        if (contClicks == cantidad_de_clicks) { //si es el ultimo click para ver la ultima card, no debe deslizarse "una card y media", sino solo "media"
            translate_px = translate_px + (-5.0);
            llego_a_la_ultima=true;
        } else {
            translate_px = translate_px + (-porcentaje);
        }
        //animacion, se desliza el carrusel..NEXT->
        div_carrusel.style.transform = "translateX(" + translate_px + "%)";
        div_carrusel.style.transition = " all 1s"
        //animacion, se cada card al moverse el carrusel
        for(let i = 0; i < div_carrusel.children.length; i++){
            div_carrusel.children[i].style.transform = "skewX(15deg)";
            div_carrusel.children[i].style.transition = " all 1s"
            setTimeout(function(){
                div_carrusel.children[i].style.transform = "rotateY(0)";
                div_carrusel.children[i].style.transition = " all 1s"
            }, 500);
        }

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

function translateFunctionAnt() {
    let padre = this.parentElement;
    let btn_ant = padre.children[0];
    let btn_sig = padre.children[1];
    let div_carrusel = padre.children[2];
    let data_cont_atributo = div_carrusel.getAttribute('data-clicks');
    if (data_cont_atributo > 1) {
        let translate_px = parseInt(div_carrusel.getAttribute('data-valpx'));
        let contClicks = data_cont_atributo;
        let cantidad_cards_por_ver = (div_carrusel.children.length) - 4;
        let cantidad_de_clicks = Math.ceil(cantidad_cards_por_ver / 1.5);
        let porcentaje = 100/cantidad_cards_por_ver;

        btn_sig.classList.remove("no-visible");
        btn_sig.classList.add("visible");
        if (contClicks == 2) { 
            translate_px = 0;
            btn_ant.classList.remove("visible");
            btn_ant.classList.add("no-visible");
        } else {
            if ((contClicks - 1) == 0) { //estoy A 1 CLICK del principio del carrusel y no podre retroceder mas..
                translate_px = translate_px + porcentaje;
                //como estoy a 1 click del principio entonces oculto el boton "ant" para no retroceder mas...
                btn_ant.classList.remove("visible");
                btn_ant.classList.add("no-visible");
            } else {
                if(llego_a_la_ultima===true){
                    translate_px=translate_px+5.0;
                    llego_a_la_ultima=false;
                }else{
                    translate_px=translate_px+porcentaje;
                }
            }
        }
        //animacion, se desliza el carrusel..<-ANT
        div_carrusel.style.transform = "translateX(" + translate_px + "%)";
        div_carrusel.style.transition = " all 1s"
        //animacion, se cada card al moverse el carrusel
        for(let i = 0; i < div_carrusel.children.length; i++){
            div_carrusel.children[i].style.transform = "skewX(-15deg)";
            div_carrusel.children[i].style.transition = " all 1s"
            setTimeout(function(){
                div_carrusel.children[i].style.transform = "rotateY(0)";
                div_carrusel.children[i].style.transition = " all 1s"
            }, 500);
        }
        //setteo valores a los atributos para que queden actualizados para el siguiente click(sig o ant)
        div_carrusel.setAttribute('data-clicks', contClicks - 1);
        div_carrusel.setAttribute('data-valpx', translate_px);
    }



    
}