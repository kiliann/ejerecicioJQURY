'use strict'

$(document).ready(inicio)

function inicio() {
    ejercicio8()
    ejercicio9()
    ejercicio10()
    ejercicio11()
    ejercicio12()
    ejercicio13()
    ejercicio14()
    ejercicio15()
    ejercicio16()
    ejercicio17()
    ejercicio18()
    ejercicio19()
    ejercicio20()
}

//Ejercicio 8
function ejercicio8() {
    $("#genera").click(() => {
        $("#formulario").html('<form action="" method="post">' +
            '<label for="">Usuario</label>' +
            '<input type="text" name="" id=""> <br />' +
            '<label for="">Contraseña</label>' +
            '<input type="text">' +
            '</form> <br />)')
    })

    $("#mostrar").click(function () {
        console.log($("#formulario").html())
    })
}

//Ejercicio 9
function ejercicio9() {
    $(".parraf").click(function () {
        console.log('Se presionó un párrafo del documento');
    })

    $('#tabla2 p').click(function () {
        console.log('Se presionó un párrafo contenido en la segunda tabla')
    })
}

//Ejercicio 10
function ejercicio10() {
    $('a').on("mouseenter", function () {
        $(this).css('background', "red")
    })

    $('a').mouseleave(function () {
        $(this).css('background-color', "white")
    })
}

//Ejercicio 11
function ejercicio11() {
    $(document).mousemove(function (evento) {
        $('#coordenadas').html('Coodenadas del ratón: ' + evento.clientX + ' ' + evento.clientY)
    })
}

//Ejercicio 12
function ejercicio12() {
    $('table td').css("border", "1px solid black").css("width", "100px").css("height", "50px")
    $('table td').mousedown(function () {
        $(this).css("background-color", "yellow")
    })

    $('table td').mouseup(function () {
        $(this).css("background-color", 'white')
    })
}

//Ejercicio 13
function ejercicio13() {
    $("#divAmarillo").css("background-color", "yellow").css('width', "50%").css("height", "100px")
    $("#divAmarillo").dblclick(function () {
        $(this).hide()
    })
}

//ejercicio 14
function ejercicio14() {
    $('.control').focus(function () {
        $(this).removeAttr('value')
    })
}

//ejercicio 15
function ejercicio15() {
    $(".control2").css("color", "blue")
    $('.control2').focus(function () {
        $(this).css("color", "red")
    })
    $('.control2').focusout(function () {
        $(this).css("color", "blue")
    })
}

//Ejercicio 16
function ejercicio16() {
    $("#listaItem").click(function () {
        $(this).hide()
    })

    $("#listaItem").mouseenter(function () {
        $(this).fadeOut()
    })

    $("#listaItem").mouseleave(function () {
        $(this).show()
    })

}

//Ejercicio 17
function ejercicio17() {
    $("#fadinLento").click(() => $('#cuadroTexto').fadeOut(2000))
    $("#unfadingVeloz").click(() => $('#cuadroTexto').fadeIn(1000))
}

//Ejercicio 18
function ejercicio18() {
    $("#fading").click(() => $('#cuadroTexto').fadeOut())
    $("#unfading").click(() => $('#cuadroTexto').fadeIn())
}

//Ejercicio 19
function ejercicio19() {
    $("#transparentar").click(() => $('#cuadroTexto').fadeTo('slow', 0.5))
    $("#opacar").click(() => $('#cuadroTexto').fadeTo('slow', 1))
}

//ejercicio 20
function ejercicio20() {
    $('p').each(function () {
        if (this.innerHTML.length < 100) {
            $(this).css('background-color', "yellow")
        }
    })
}