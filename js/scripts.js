//Rotacion de logo
$(window).on('scroll', () => {
    const scrollRealizado = $(window).scrollTop();
    const giraRuedita = `${scrollRealizado * 0.1}deg`;
    $('#logo').css('transform', `rotate(${giraRuedita})`);
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

//Cuando la pag este lista
window.onload = () => {
    trazar();
}