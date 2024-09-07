function mobileMode() {
    document.getElementById("menu").classList.toggle('active');
}


/*Aqui le asignamos el valor 'showMorebtn' a la class='show-more-btn' por eso la referenciamos con "."
const showMorebtn = document.querySelector('.show-more-btn');

//Le asignamos el valor 'text' a la class='text' por eso la referenciamos con "."
const text = document.querySelector('.text');

//Sí existe un click en el showMorebtn (antes show-more-btn), entonces...
showMorebtn.addEventListener('click', () => {

    //classList.toggle() agrega una clase al elemento si no está presente, y la quita si ya está presente.
    //En otras palabras, alterna la presencia de una clase en el classList del elemento.
    text.classList.toggle('showMore');

    //Si la clase ya contiene 'showMore' entonces el contenido del boton es if true: 'Mostrar Menos', if false: 'Mostrar Más'
    showMorebtn.textContent = text.classList.contains('showMore') ? 'Mostrar Menos' : 'Mostrar Más';
});
*/

/* FUNCIÓN CENTRAR REDIRECCIÓN: */
// function centrarEle(...ids) {
//     ids.forEach(id => {
//         let elemento = document.getElementById(id)

//         if (elemento) {
//             elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     });
// }



/*Comentario para probar git */