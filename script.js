const backToTop = document.getElementById('back-to-top');
const moviesArea = document.getElementById('movies-area');
const selectMovie = document.getElementById('movie-select');
const registerBtn = document.getElementById('sign-up');

registerBtn.addEventListener('click', ()=>{
    location.href = 'register.html'
})

/**
 * When user scrolls down the arrow will show up
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 320) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

/**
 * When user clicks on the arrow icon it will take him back to top
 */
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0});
})


// const createUser = (data) => {
//   const movie = document.createElement("div");

//   const movieData = data.results[0];
//   const movieName = movieData.name;
//   const picture = movieData.image.original;

//   movie.innerHTML = `
//   <img src="${picture}" alt="${movieName}"/>
//   `;

//   return movie;
// };

// selectMovie.addEventListener('change', () =>{
    
// })