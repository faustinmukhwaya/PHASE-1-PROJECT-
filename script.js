const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm) {
        try {
            const movies = await searchMovies(searchTerm);
            displayMovies(movies);
        } catch (error) {
            resultsDiv.innerHTML = '<p>Error fetching movies. Please try again.</p>';
            console.error('Error:', error);
        }
    }
});

async function searchMovies(query) {
    const response = await fetch('http://localhost:3000/movies');
    const movies = await response.json();
    
     return movies.filter(movie => 
        movie.title.toLowerCase().includes(query)
    );
}

function displayMovies(movies) {
    resultsDiv.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} poster">
            <h2>${movie.title}</h2>
            <p>Year: ${movie.year}</p>
            <p>Rating: ${movie.rating}/10</p>
        `;
        
        resultsDiv.appendChild(movieCard);
    });
}