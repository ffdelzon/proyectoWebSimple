$(document).ready(function(){

    //Estados
    var btn_logo_activado = false; //NO estoy viendo logos
    var btn_web_activado = false; //estoy viendo webs
    var btn_publicidad_activado = false; //NO estoy viendo publicidad

    var item = '<div class="carousel-item carousel-item-js"></div>';
    var img = '<img class="d-block w-100 carousel-img" alt="portfolio-3">';
    var target = '<li data-target="#carousel-portfolio" data-slide-to="11" class="target-none"></li>';

    $('#banner-empezar').mouseenter(function(){
        $(this).attr("src", "img/empezar-hover.png");
    });

    $('#banner-empezar').mouseleave(function(){
        $(this).attr("src", "img/empezar.png");
    });

    $('#carousel-portfolio').carousel({
      interval: 3000
    })

    $('#carousel-clientes').carousel({
      interval: 2000
    })


    //Cuando hago click en logos
    $("#btn-logo").click(function(){

        btn_logo_activado = true;

        //Si estaba viendo webs
        if (btn_web_activado == false && btn_logo_activado == true && btn_publicidad_activado == false) {

            $('.remove-portfolio-item').removeClass("active"); //a cualquiera que tenga el active, se lo borramos.
            $('.carousel-item-1').addClass("active"); //al item 1 le ponemos el active
            $('#carousel-portfolio').carousel(0); //ponemos el carousel en el slide 1

            $('.target-remove').removeClass("active"); //a cualquier target le quitamos el active
            $('.target-0').addClass("active"); //al target 0 (el primero) le agregamos el active

            $(".portfolio-1").attr("src", "img/logo-designs-1.png");
            $(".remove-portfolio-item").remove(); //removemos todos los item del inner
            $(".remove-portfolio").remove(); //removemos todos los img

            $(".movil-img-1").attr("src", "img/logo-designs-1.png");
            $(".remove-movil-img").remove(); //removemos todos los img del movil

            //remueve tag del 1-10, el 0 siempre está
            for (var l = 1; l < 11; l++) {
                 $('.target-remove-'+l).remove();
            }

            //agrega los tag li para data-target del 1-3 (2-3)
            var j = 1;
            while (j < 3){ 
                $('.carousel-indicators').append('<li data-target="#carousel-portfolio" data-slide-to="'+j+'" class="target-remove-'+j+'"></li>'); //en cada div.carousel-item agregamos un tag img
                j++;
            }

            //agrega las imagenes a img, el 1 siempre está
            var i = 2;
            while (i < 4){ 
                $('.carousel-portafolio').append('<div class="carousel-item carousel-item-'+i+' remove-portfolio-item">'); //en carousel-portafolio(inner) agrega un div-item
                $('.carousel-item-'+i).append('<img class="d-block w-100 portfolio-'+i+'" alt="portfolio-'+i+'">'); //en cada div.carousel-item agregamos un tag img
                $('.portfolio-'+i).attr("src", 'img/logo-designs-'+i+'.png'); //y modificamos el atributo img/portfolio-i.png

                $('.portfolio-movil').append('<img src="img/logo-designs-'+i+'.png" alt="logo-designs-'+i+'" class="img-fluid remove-movil-img">'); //agrega en movil
                i++;
            }
            
            btn_logo_activado = false;
            //vuelvo al estado inicial, ya mostre logos
        } 
    });

    //Cuando hago click en Webs
    $("#btn-web").click(function(){

        btn_web_activado = true;

        if (btn_web_activado == true && btn_logo_activado == false && btn_publicidad_activado == false) {

            $('.remove-portfolio-item').removeClass("active"); //a cualquiera que tenga el active, se lo borramos.
            $('.carousel-item-1').addClass("active"); //al item 1 le ponemos el active
            $('#carousel-portfolio').carousel(0); //ponemos el carousel en el slide 1

            $('.target-remove').removeClass("active"); //a cualquier target le quitamos el active
            $('.target-0').addClass("active"); //al target 0 (el primero) le agregamos el active

            $(".portfolio-1").attr("src", "img/portfolio-1.png");
            $(".remove-portfolio-item").remove(); //removemos todos los item del inner
            $(".remove-portfolio").remove(); //removemos todos los img

            $(".movil-img-1").attr("src", "img/portfolio-1.png");
            $(".remove-movil-img").remove(); //removemos todos los img del movil

            //remueve tag del 1-10, el 0 siempre está
            for (var l = 1; l < 11; l++) {
                 $('.target-remove-'+l).remove();
            }
            
            //agrega los tag li para data-target, el 0 siempre está
            var j = 1;
            while (j < 11){ 
                $('.carousel-indicators').append('<li data-target="#carousel-portfolio" data-slide-to="'+j+'" class="target-remove-'+j+'"></li>'); //en cada div.carousel-item agregamos un tag img
                j++;
            }

            //agrega las imagenes a img, el 1 siempre está
            var i = 2;
            while (i < 12){
                $('.carousel-portafolio').append('<div class="carousel-item carousel-item-'+i+' remove-portfolio-item">'); //en carousel-portafolio(inner) agrega un div-item 
                $('.carousel-item-'+i).append('<img class="d-block w-100 portfolio-'+i+'" alt="portfolio-'+i+'">'); //en cada div.carousel-item agregamos un tag img
                $('.portfolio-'+i).attr("src", 'img/portfolio-'+i+'.png'); //y modificamos el atributo img/portfolio-i.png

                $('.portfolio-movil').append('<img src="img/portfolio-'+i+'.png" alt="portfolio-'+i+'" class="img-fluid remove-movil-img">'); //agrega en movil
                i++;
            }

            btn_web_activado = false;
            //vuelvo al estado inicial, ya mostre webs
        }

    });

    //Cuando hago click en Publicidad
    $("#btn-publicidad").click(function(){

        btn_publicidad_activado = true;

        if (btn_web_activado == false && btn_logo_activado == false && btn_publicidad_activado == true) {

            $('.remove-portfolio-item').removeClass("active"); //a cualquiera que tenga el active, se lo borramos.
            $('.carousel-item-1').addClass("active"); //al item 1 le ponemos el active
            $('#carousel-portfolio').carousel(0); //ponemos el carousel en el slide 1

            $('.target-remove').removeClass("active"); //a cualquier target le quitamos el active
            $('.target-0').addClass("active"); //al target 0 (el primero) le agregamos el active

            $(".portfolio-1").attr("src", "img/publicidad-1.png"); //al img del item 1 le ponemos la pbulicidad
            $(".remove-portfolio-item").remove(); //removemos todos los item del inner
            $(".remove-portfolio").remove(); //removemos todos los img

            $(".movil-img-1").attr("src", "img/publicidad-1.png");
            $(".remove-movil-img").remove(); //removemos todos los img del movil


            //remueve tag del 1-10, el 0 siempre está
            for (var l = 1; l < 11; l++) {
                 $('.target-remove-'+l).remove();
            }
            
            //agrega los tag li para data-target, el 0 siempre está
            var j = 1;
            while (j < 10){ 
                $('.carousel-indicators').append('<li data-target="#carousel-portfolio" data-slide-to="'+j+'" class="target-remove-'+j+'"></li>'); //en cada div.carousel-item agregamos un tag img
                j++;
            }
            //agregamos los div-item y los img, tambien camibamos el src a publicidad.
            var i = 2;
            while (i < 11){ 
                $('.carousel-portafolio').append('<div class="carousel-item carousel-item-'+i+' remove-portfolio-item">'); //en carousel-portafolio(inner) agrega un div-item
                $('.carousel-item-'+i).append('<img class="d-block w-100 portfolio-'+i+'" alt="portfolio-'+i+'">'); //en cada div.carousel-item agregamos un tag img
                $('.portfolio-'+i).attr("src", 'img/publicidad-'+i+'.png'); //y modificamos el atributo img/portfolio-i.png

                $('.portfolio-movil').append('<img src="img/publicidad-'+i+'.png" alt="publicidad-'+i+'" class="img-fluid remove-movil-img">'); //agrega en movil
                i++;

            }

            btn_publicidad_activado = false;
            //vuelvo al estado inicial, ya mostre publicidad
        }

    });
});