const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Function to extract YouTube video ID from the URL
function getYouTubeVideoId(url) {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : null;
}

// Fetch the film data from the JSON file
fetch('film.json')
    .then(response => response.json())
    .then(data => {
        const movies = data.movies;
        const selectedMovie = movies.find(movie => movie.id == movieId);

        // Check if the movie is found
        if (selectedMovie) {
            // For larger screens
            document.getElementById('movieImageLarge').src = selectedMovie.posterUrl;

            // For smaller screens
            const smallScreenImage = document.getElementById('movieImageSmall');
            if (smallScreenImage) {
                smallScreenImage.src = selectedMovie.posterUrl;
                smallScreenImage.style.display = 'none'; // hide on small screens
            }

            // Set other movie details
            document.getElementById('movieTitle').textContent = selectedMovie.title;
            document.getElementById('moviePlot').textContent = selectedMovie.plot;
            document.getElementById('movieCast').textContent = `Cast: ${selectedMovie.actors}`;
            document.getElementById('movieDirector').textContent = `Director: ${selectedMovie.director}`;
            document.getElementById('movieYear').textContent = `Released: ${selectedMovie.year}`;

            const videoFrame = document.getElementById("movieVideo");

            // Extract YouTube video ID
            const videoId = getYouTubeVideoId(selectedMovie.videoUrl);

            // Embed YouTube video using the video ID
            videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        } else {
            // Error
            console.error(`Movie with ID ${movieId} not found.`);
        }
    })
    .catch(error => console.error('Error fetching movie data:', error));
