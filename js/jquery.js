'use strict'


$(document).ready(inicio)

function inicio(){
    ejercicioUno();
    ejercicioDos();
    ejercicioTres();
    ejercicioCuatro();
    ejercicioCinco();
    ejercicioSeis();
    ejercicioSiete();
}


function ejercicioUno(){
    $("h1").click((evento) =>{
        $(evento.target).css("background-color", "blue").css("color", "red").css("font-family", "comic sans ms")

        })
}

function ejercicioDos(){
    $("td").click((evento) =>{
        $(evento.target).css("background-color", "red")
    })
}

function ejercicioTres(){
    $("button").eq(0).click(() =>{
        $("ul").eq(0).hide();
    })
}
function ejercicioCuatro(){
    $("button").eq(1).click(() => {
        $(".objetos").css("background-color", "red")
    })
}

function ejercicioCinco(){
    $("#boton1").click(() => {
        alert($("p").text())
    })
    let texto = "el texto se cambio por este para desparecer"
    $("#boton2").click(() =>{
        $("p").text(texto)
    })
    $("#boton3").click(() => {
        $("td").text(texto)
    })
}

function ejercicioSeis(){
    $(".boton").eq(0).click(()=>{
        $(".tablaUno").css("border", "2px solid red")
        $(".tablaUno tr td").css("border", "2px solid red")
    })
    $(".boton").eq(1).click(() =>{
        $("#atributo").text($(".tablaUno").css('border'));
    })
    $(".boton").eq(2).click(() =>{
        $(".tablaUno").css("border", "0px ")
        $(".tablaUno tr td").css("border", "0px ")
    })
}

function ejercicioSiete(){
    $("#añadir").click(() =>{
        $("#ej7").addClass("ejSiete")
    })
    $("#quitar").click(() =>{
        $("#ej7").removeClass("ejSiete")
    })
}
