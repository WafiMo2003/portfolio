// Va aller chercher les éléments ayant les termes entre guillemets et les stocker dans une variable
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header')

// Lorsque la barre de menu est sélectionnée
menu.onclick = () => {
    //Va faire en sorte de lister les éléments du menu 
    menu.classList.toggle('fa-times');
    header.classList.toggle('afficherMenu')
}

//Lorsque l'utilisateur fait défiler la page
window.onscroll = () => {
    //Va faire en sorte d'enlever la barre de navigation
    menu.classList.remove('fa-times');
    header.classList.remove('afficherMenu')
}