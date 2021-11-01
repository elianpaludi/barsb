function openMenu(){
    var menu = document.getElementById("menu");
    if(menu.classList.contains("standBy")){
        menu.classList.remove("standBy");
        menu.classList.add("movementOut");
    }else{
        menu.classList.remove("movementOut");
        menu.classList.add("movementIn");
        menu.classList.add("standBy");
    }

    
    setTimeout(function(){
        menu.classList.remove("movementIn");
    }, 1000);
}

let botones = document.getElementsByClassName("boton");
console.log(botones)
botones[0].addEventListener("click", function(e){
openMenu();
});
botones[1].addEventListener("click", function(e){
openMenu();
});
botones[2].addEventListener("click", function(e){
openMenu();
});
botones[3].addEventListener("click", function(e){
openMenu();
});