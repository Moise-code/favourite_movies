const addMovieModal = document.querySelector('#add-modal');
const addBackdrop = document.querySelector('#backdrop')
const startAddMovieButton = document.querySelector('header button');


const toggleMovieModal = () =>{
  // function to add the modal after clicking the add movie button.
 addMovieModal.classList.toggle('visible');
 toggleBackdrop();

}

const toggleBackdrop = () =>{
  addBackdrop.classList.toggle('visible');
}
startAddMovieButton.addEventListener('click',toggleMovieModal);

