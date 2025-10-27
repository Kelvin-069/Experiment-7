const movies = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Avengers: Endgame",
  "Spider-Man: No Way Home",
  "Joker",
  "Titanic",
  "The Matrix",
  "The Godfather",
  "Avatar"
]

const movieList = document.getElementById("movieList")
const searchInput = document.getElementById("searchInput")

function displayMovies(filteredMovies) {
  movieList.innerHTML = ""
  filteredMovies.forEach(movie => {
    const li = document.createElement("li")
    li.textContent = movie
    movieList.appendChild(li)
  })
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase()
  const filtered = movies.filter(movie => movie.toLowerCase().includes(searchTerm))
  displayMovies(filtered)
})

displayMovies(movies)
