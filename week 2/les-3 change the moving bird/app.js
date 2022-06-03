//Oefening angry-birds
//. is voor class
//# is voor id
// niks is voor html-tags
const bird = document.querySelector('.bird');
let px = 0;

bird.addEventListener('click', function(){
    px += 50;
    bird.style.left = px + "px"

})



window.addEventListener('keydown', function(e){
   if(e.key == 'ArrowRight'){
    px += 50;
    bird.style.left = px + "px";
    bird.src = "img/b-right.svg"
   } 
   
   if(e.key == 'ArrowLeft'){
    px -= 50;
    bird.style.left = px + "px";
    bird.src = "img/b-left.svg"
   } 
   
   if(e.key == 'ArrowUp'){
    px += 50;
    bird.style.bottom = px + "px";
    bird.src = "img/b-up.svg"

   } 
   
   if(e.key == 'ArrowDown'){
    px -= 50;
    bird.style.bottom = px + "px";
    bird.src = "img/b-down.svg"

   }


})