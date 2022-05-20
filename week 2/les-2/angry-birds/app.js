//Oefening angry-birds
//. is voor class
//# is voor id
// niks is voor html-tags
const bird = document.querySelector('.bird');
let px = 0;

bird.addEventListener('click', function(){
    //elke keer als ik op de bird klk,
    px += 50;
    bird.style.left = px + "px"

})