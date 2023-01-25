const addMovieModal = document.querySelector('#add-modal');
const addBackdrop = document.querySelector('#backdrop')
const startAddMovieButton = document.querySelector('header button');
const cancelModal = document.querySelector('.btn--passive');
const confirmAddMovieButton = document.querySelector('.btn--success');
const userInputes = addMovieModal.querySelectorAll('input');
const entryTextSection = document.querySelector('#entry-text');

const movies = [];

const toggleMovieModal = () =>{
  // function to add the modal after clicking the add movie button.
 addMovieModal.classList.toggle('visible');
 toggleBackdrop();
 
}

const closeModal = () =>{
addBackdrop.classList.remove('visible');
  addMovieModal.classList.remove('visible');
}

const toggleBackdrop = () =>{
  addBackdrop.classList.toggle('visible');
}
const clearUserInput = () =>{
  for (const usrInput of userInputes ) {
    usrInput.value = '';
  } 
}
const addMovieHandler = () =>{

  const titleMovie = userInputes[0].value;
  const imageUrlValue = userInputes[1].value;
  const ratingValue = userInputes[2].value;
  if(titleMovie.trim() === '' ||
     imageUrlValue.trim() === '' ||
     ratingValue.trim() === '' ||
     +ratingValue < 1 || 
     +ratingValue > 5){
      alert('please use valid information and rating from 1 to 5');
     } 

     // creating the object to get the input values
     const newMovie = {
      title : titleMovie,
      image : imageUrlValue,
      rating : ratingValue
     }

     movies.push(newMovie);
     console.log(movies);
     clearUserInput();
     closeModal();
     updateUi();
}

const updateUi = () =>{

  if(movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }

}
startAddMovieButton.addEventListener('click',toggleMovieModal);
cancelModal.addEventListener('click' , closeModal);
addBackdrop.addEventListener('click',closeModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler)
