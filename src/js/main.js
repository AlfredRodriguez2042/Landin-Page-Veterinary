

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






//alert('hola')