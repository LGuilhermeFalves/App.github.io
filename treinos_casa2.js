document.addEventListener("DOMContentLoaded", function(event) {
    titulo = localStorage.getItem("titulo");

    h2 = document.querySelector(".titulo_equipamento");
    h2.innerHTML = "Equipamentos - " + titulo;

    treinos = document.querySelector('.Treinos')
    exercicios = treinos.querySelectorAll('li')
    for (var i = 0; i <=3; i++){
        exercicios[i].innerHTML = '3 Séries de  ' + localStorage.getItem("exercicio_"+(i+1));
    }

    div_equip = document.querySelector(".div")
    console.log(div_equip)
    li_equip = div_equip.querySelectorAll("li");
    console.log(li_equip)
    for (var i = 0; i <=3; i++){
       li_equip[i].innerHTML = ' ' + localStorage.getItem("equipamento_"+(i+1));
    }

});