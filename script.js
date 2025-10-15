const backToTop = document.getElementById('back-to-top');
const moviesArea = document.getElementById('movies-area');
const selectMovie = document.getElementById('movie-select');

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


selectMovie.addEventListener('change', (event) =>{
    const selectValue = event.target.value;
    const urlData = 'https://api.tvmaze.com/search/shows?q=' + selectValue
    getMovie(urlData);
    
})

const createMovie = (movieElement) => {
  const movie = document.createElement("div");
        
  const image = movieElement.show.image?.original;
  const movieName = movieElement.show.name;

  movie.innerHTML = `
  <img src="${image}" alt="Name of this movie is ${movieName}"/>
  `;

  return movie;
};

const getMovie = async(url) => {
    const json = await fetch(url);
    const data = await json.json();

    data.forEach(movieElement => {
     const element = createMovie(movieElement);
     moviesArea.append(element)
    });
   
}