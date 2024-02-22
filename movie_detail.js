const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Fetch the film data from the JSON file
fetch('film.json')
    .then(response => response.json())
    .then(data => {
        
        const movies = data.movies;

        const selectedMovie = movies.find(movie => movie.id == movieId);

        // Check if the movie is found
        if (selectedMovie) {
           
            document.getElementById('movieImage').src = selectedMovie.posterUrl;
            document.getElementById('movieTitle').textContent = selectedMovie.title;
            document.getElementById('moviePlot').textContent = selectedMovie.plot;
            document.getElementById('movieCast').textContent = `Cast: ${selectedMovie.actors}`;
            document.getElementById('movieDirector').textContent = `Director: ${selectedMovie.director}`;
            document.getElementById('movieYear').textContent = `Released: ${selectedMovie.year}`;
        } else {
            // Error if not found
            console.error(`Movie with ID ${movieId} not found.`);
        }
    })
    .catch(error => console.error('Error fetching movie data:', error));
