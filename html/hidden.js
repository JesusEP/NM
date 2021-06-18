let ubicacionPrincipal = window.pageYOffset
window.onscroll = function() {
    let desplazaAct = window.pageYOffset;
    if(ubicacionPrincipal >= desplazaAct){
        document.getElementById("navbar").style.top = "0";
    }
    else{
        document.getElementById("navbar").style.top = "-100px";
    }
    ubicacionPrincipal = desplazaAct
}

$('.tituloescuadron').on('click', function () {
    $('.collapse').collapse('hide');
});

$('.d-block').on('click', function () {
    $('.collapse').collapse('hide');
});