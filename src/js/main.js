

let menu = document.getElementById('menu');
let mostrarMenu = document.getElementById('menu-ctn')

 menu.addEventListener('click', ()=>{
    mostrarMenu.classList.toggle('toggle');
 })


// mostrarMenu.addEventListener('click',()=>{
    
//     mostrarMenu.classList.toggle('toggle')
// })

window.onscroll = ()=>{
    if( document.documentElement.scrollTop >50){
        mostrarMenu.classList.add('stiky')
    }else{
       mostrarMenu.classList.remove("stiky")
    }
}

let l = 0;
let slide = document.getElementsByClassName('slider');
let dote  = document.getElementsByClassName('dot');

const slider = ()=>{
    for(let i =0; i < slide.length; i++){
        slide[i].style.display = "none";
   
    }
    l++
    if(l > slide.length){
     l = 1;

    }
    for(let i =0; i < dote.length; i++){
        dote[i].className = dote[i].className.replace(" active-dot", "");
    }

    slide[l-1].style.display = "block";
    dote[l-1].className += " active-dot";
    setTimeout(slider, 3000)
    
}
slider();





//alert('hola')