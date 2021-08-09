

document.getElementById("bobble1").addEventListener("mouseover", function() {
    rand = Math.floor(Math.random() * 4)  + "%";
    rand1 = Math.floor(Math.random() * 10)  + 5 + "%";
    document.getElementById("bobble1").style.top = rand;
    document.getElementById("bobble1").style.left = rand1;
});
document.getElementById("bobble2").addEventListener("mouseover", function() {
    rand = Math.floor(Math.random() * 5)  + 60 +"%";
    rand1 = Math.floor(Math.random() * 5) + 10 +"%";
    document.getElementById("bobble2").style.top = rand;
    document.getElementById("bobble2").style.left = rand1;
});
document.getElementById("bobble3").addEventListener("mouseover", function() {
    rand = Math.floor(Math.random() * 5) + 80 +"%";
    rand1 = Math.floor(Math.random() * 5) + 40 +"%";
    document.getElementById("bobble3").style.top = rand;
    document.getElementById("bobble3").style.left = rand1;
});
document.getElementById("bobble4").addEventListener("mouseover", function() {
    rand = Math.floor(Math.random() * 5)  + 10 +"%";
    rand1 = Math.floor(Math.random() * 0)  + 5 +"%";
    document.getElementById("bobble4").style.top = rand;
    document.getElementById("bobble4").style.right = rand1;
});
document.getElementById("bobble5").addEventListener("mouseover", function() {
    rand = Math.floor(Math.random() * 5)  + 60 +"%";
    rand1 = Math.floor(Math.random() * 0)  + 5 +"%";
    document.getElementById("bobble5").style.top = rand;
    document.getElementById("bobble5").style.right = rand1;
});
document.getElementById("bobble6").addEventListener("mouseover", function() {
    rand = Math.floor(Math.random() * 5)  + 80 + "%";
    rand1 = Math.floor(Math.random() * 5) + 10 + "%";
    document.getElementById("bobble6").style.top = rand;
    document.getElementById("bobble6").style.right = rand1;
    console.log(rand, rand1)
});


var dragMe = document.getElementById("bobble1"),
  /* o x inicial do drag*/
  dragOfX = 0,
  /* o y inicial do drag */
  dragOfY = 0;

/* ao segurar o elemento */
function dragStart(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;
    
    /* adiciona os eventos */
    addEventListener("mousemove", dragMove);
    addEventListener("mouseup", dragEnd);
}
    
/* ao ser arrastado */
function dragMove(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY) + 'px';
}
    
/* ao terminar o drag */
function dragEnd() {
    /* remove os eventos */
    removeEventListener("mousemove", dragMove);
    removeEventListener("mouseup", dragEnd);
}
    
/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart);