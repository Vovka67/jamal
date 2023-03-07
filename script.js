var character = document.getElementById("character");

document.addEventListener("click",  jump);
 
function jump () {
    if(character.classList.contains("animate") == true) {
        return;
    } else {
        character.classList.add("animate");
        setTimeout(removeJump, 300);  
    }
} 

function removeJump () {
    character.classList.remove("animate");
}
let isAlive = setInterval (function () {
    let dino = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let cactus = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (cactus < 50 && cactus > 0 && dino >= 140){
    alert('GAME OVER')
}
}, 10)

