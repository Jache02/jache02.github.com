//Para index.html
let moreinfo = document.querySelectorAll(".vermas");

//Recorrerlos

moreinfo.forEach(function(more){

    //Agregar un evento click a cada uno de ellos
    more.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitar las clases de animacio que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href= "/Boletines/Restaurantes/Horno-Di-Parma.html";
        },850);
        //setInterval

        return false;
    });
});

