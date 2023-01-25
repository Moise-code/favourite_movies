const addMovieModal = document.querySelector("#add-modal");
const addBackdrop = document.querySelector("#backdrop");
const startAddMovieButton = document.querySelector("header button");
const cancelModal = document.querySelector(".btn--passive");
const confirmAddMovieButton = document.querySelector(".btn--success");
const userInputes = addMovieModal.querySelectorAll("input");
const entryTextSection = document.querySelector("#entry-text");
const movieList = document.querySelector("#movie-list");
const deleteModal = document.querySelector('#delete-modal')
const deleteYesButton = document.querySelector('.btn--danger')
const deleteNoButton = document.querySelector('#noModal')
const movies = [];

const toggleMovieModal = () => {
  // function to add the modal after clicking the add movie button.
  addMovieModal.classList.toggle("visible");
  toggleBackdrop(); 
};

const closeModal = () => {
  addBackdrop.classList.remove("visible");
  addMovieModal.classList.remove("visible");
  clearUserInput();
  cancelMovieDeletion();
};

const toggleBackdrop = () => {
  addBackdrop.classList.toggle("visible");

};
const clearUserInput = () => {
  for (const usrInput of userInputes) {
    usrInput.value = "";
  }
};
const addMovieHandler = () => {
  const titleMovie = userInputes[0].value;
  const imageUrlValue = userInputes[1].value;
  const ratingValue = userInputes[2].value;
  if (
    titleMovie.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("please use valid information and rating from 1 to 5");
    return;
  }

  // creating the object to get the input values
  const newMovie = {
    id : Math.random().toString(),
    title: titleMovie,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  clearUserInput();
  closeModal();
  renderNewMovieElement(newMovie.id,newMovie.title, newMovie.image, newMovie.rating);
  updateUi();
};

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

//function to allow the user choose weither or not to delete the movie

const deleteMovie = movieId =>{
  let movieIndex = 0;
  for (const movie of movies){
    if(movie.id === movieId){
      break;
    }
    movieIndex++;
  }
  
  movies.splice(movieIndex, 1);

  // movieList. children[movieIndex].remove();

  movieList.removeChild(movieList.children[movieIndex]);
  cancelMovieDeletion();
  updateUi();
  

}

// function to cancel the delete movie modal

const cancelMovieDeletion = () =>{
  addBackdrop.classList.remove('visible');
  deleteModal.classList.remove('visible')
}

// function to delete movie 
const deleteMovieHandler = (movieId) =>{
  deleteModal.classList.add('visible');
  toggleBackdrop();
  
  deleteYesButton.addEventListener('click', cancelMovieDeletion);
  deleteYesButton.addEventListener('click', deleteMovie.bind(null, movieId));
}

// function to add the new movies to the ui

const renderNewMovieElement = (id,title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  
  <div class = "movie-element__image">
  <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
   </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
  movieList.append(newMovieElement);
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelModal.addEventListener("click", closeModal);
addBackdrop.addEventListener("click", closeModal);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
deleteNoButton.removeEventListener('click', cancelMovieDeletion);
deleteNoButton.addEventListener('click', cancelMovieDeletion);
 
