

//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(links);
});
*/
/*
let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener('click',function(ev){
        ev.preventDefault();

        return false;
    });
    
}); 
*/
/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-regular"); 
    icono.classList.add("fa-solid"); 
})
*/
//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitar las clases de animacio que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href= "/Boletines";
        },850);
        //setInterval

        return false;
    });
});
