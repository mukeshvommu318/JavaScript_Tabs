

let aboutjs = document.getElementById("about")
let tovjs = document.getElementById("tov")
let attjs = document.getElementById("att")
let showaboutjs = document.getElementById("aboutbtn")
let showtovjs = document.getElementById("tovbtn")
let showattjs = document.getElementById("attbtn")
tovjs.style.display="none"
attjs.style.display="none"

function showabout(){
    aboutjs.style.display="block"
    tovjs.style.display="none"
    attjs.style.display="none"
    showaboutjs.style.backgroundColor="#87CEEB"
    showtovjs.style.backgroundColor="white"
    showattjs.style.backgroundColor="white"
}

function showtov(){
    aboutjs.style.display="none"
    tovjs.style.display="block"
    attjs.style.display="none"
    showaboutjs.style.backgroundColor="white"
    showtovjs.style.backgroundColor="#87CEEB"
    showattjs.style.backgroundColor="white"
}

function showatt(){
    aboutjs.style.display="none"
    tovjs.style.display="none"
    attjs.style.display="block"
    showaboutjs.style.backgroundColor="white"
    showtovjs.style.backgroundColor="white"
    showattjs.style.backgroundColor="#87CEEB"
}