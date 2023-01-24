const addMoviesBtn = document.querySelector('.addMovies');
const form = document.querySelector('form');
const modal = document.querySelector('.backdrop');
const userInput = document.querySelector('input');
const textArea = document.querySelector('textarea');
const formButton = document.querySelector('.submit');
const contents = document.querySelector('.content');

let userInputedValue = userInput.value;
let textContent = textArea.value;

addMoviesBtn.addEventListener('click', e =>{
  e.preventDefault();
  modal.classList.toggle('visible');
})

form.addEventListener('submit', e =>{
  e.preventDefault();
  contents.innerHTML += `<div class"added-Movie">
  <h1>The movie calles ${userInput.value}</h1>
  <p>${textArea.value}</p>
  </div>`
  modal.classList.remove('visible');
})
