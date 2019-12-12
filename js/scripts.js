//Escuchador evento scroll
$(window).on('scroll', () => {
//Rotacion de logo
    const scrollRealizado = $(window).scrollTop();
    const giraRuedita = `${scrollRealizado * 0.1}deg`;
    $('#logo').css('transform', `rotate(${giraRuedita})`);

    //Aparicion Imagenes
    const altura = $('.reveal').offset().top;
    const margen = window.innerHeight * 0.5;
    if(scrollRealizado >= altura - margen){
        $('.reveal').addClass('visible'); 
    }
});

//Trazado de svg
function trazar(){
    new Vivus('heroSvg', {
        duration: 250,
        type: 'oneByOne',
        pathTimingFunction: Vivus.EASE_OUT
    }, () => {
        $('#heroSvg').addClass('terminado');
    });
}

// Tipeo de palabras
function tipear(){
    new TypeIt('#escritura',{
        strings: ['ELEGANTES','MODERNAS','RESPONSIVE'],
        speed: 100,
        deleteSpeed: 50,
        loop: true,
        breakLines: false,
    })
}

// Crrusel 2 section intro
function carrusel2(){
    $('#carruselClientes2').owlCarousel({
        items: 3,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        autoplayHoverPause: true,
    })
}

//Cuando la pag este lista
window.onload = () => {
    trazar();
    tipear();
    carrusel2();
};

// Controles Video - section intro
//Play
$('#playVid, #iconoPlayVid').on('click', () => {
    $('#videoPresentacion').get(0).play();
    $('#iconoPlayVid').css('opacity', 0);
});

//Pause
$('#pauseVid').on('click', () => {
    $('#videoPresentacion').get(0).pause();
    $('#iconoPlayVid').css('opacity', 1);

});
//Stop
$('#stopVid').on('click', () => {
    $('#videoPresentacion').get(0).load();
    $('#iconoPlayVid').css('opacity', 1);
});

//Smooth Scroll Menu Navegacion
$('.nav-link').on('click', function(){
    const destino = $(this).attr('href');
    $('html').animate(
        { scrollTop: $(destino).offset().top },
        1000,
    );
});