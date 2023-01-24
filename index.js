const addMovieModal = document.querySelector('#add-modal');
const addBackdrop = document.querySelector('#backdrop')
const startAddMovieButton = document.querySelector('header button');
const cancelModal = document.querySelector('.btn--passive');


const toggleMovieModal = () =>{
  // function to add the modal after clicking the add movie button.
 addMovieModal.classList.toggle('visible');
 toggleBackdrop();
 
}

const closeModal = () =>{
addBackdrop.classList.remove('visible');
  addMovieModal.classList.remove('visible');
}
cancelModal.addEventListener('click' , () =>{
  closeModal();
  
})
addBackdrop.addEventListener('click', ()=>{
  closeModal();
})

const toggleBackdrop = () =>{
  addBackdrop.classList.toggle('visible');
}
startAddMovieButton.addEventListener('click',toggleMovieModal);

