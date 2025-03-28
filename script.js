const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

let allMovies = [];

window.addEventListener('load', async () => {
    await loadAllMovies();
    displayMovies(allMovies); // Show all movies on load
});

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        const filteredMovies = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayMovies(filteredMovies);
    } else {
        displayMovies(allMovies); // Show all if search is cleared
    }
});

async function loadAllMovies() {
    try {
        const response = await fetch('db.json');
        if (!response.ok) throw new Error('Failed to fetch db.json');
        const data = await response.json();
        allMovies = data.movies;
        console.log('All movies loaded:', allMovies);
    } catch (error) {
        console.error('Error loading movies:', error.message);
        resultsDiv.innerHTML = `<p>Error: ${error.message}. Please check db.json.</p>`;
    }
}

function displayMovies(movies) {
    resultsDiv.innerHTML = ''; // Clear previous results
    
    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p>No movies found.</p>';
        return;
    }
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        const posterPath = movie.poster || 'https://via.placeholder.com/200x300?text=No+Poster';
        
        movieCard.innerHTML = `
            <img src="${posterPath}" alt="${movie.title} poster" onerror="this.src='https://via.placeholder.com/200x300?text=Image+Not+Found'">
            <h2>${movie.title}</h2>
            <p>Release Year: ${movie.year || 'N/A'}</p>
            <p>Rating: ${movie.rating || 'N/A'}/10</p>
            <p>Plot: ${movie.description || 'No summary available'}</p>
        `;
        
        resultsDiv.appendChild(movieCard);
    });
}