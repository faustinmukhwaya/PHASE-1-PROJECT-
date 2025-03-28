# PHASE-1-PROJECT-
# Movie Search App

A simple web application that allows users to search for movies and view details such as ratings, release year, and plot summaries. The app uses a local `db.json` file as its data source, displaying movie posters and information on page load with optional search filtering.

## Features
- **Initial Display**: Shows all movies from `db.json` with posters on page load.
- **Search Functionality**: Filters movies by title (case-insensitive).
- **Movie Details**: Displays:
  - Poster image
  - Title
  - Release Year
  - Rating (out of 10)
  - Plot Summary
- **Responsive Design**: Grid layout adjusts to screen size.
- **Error Handling**: Fallback images for missing posters and error messages for data loading issues.

## Tech Stack
- **HTML**: Structure and layout.
- **CSS**: Styling with a responsive grid and hover effects.
- **JavaScript**: Dynamic content loading and search filtering.
- **Data**: Local `db.json` file with 13 movie entries.

## Prerequisites
- [Node.js](https://nodejs.org/) (for running `live-server`).
- A modern web browser (e.g., Chrome, Firefox).

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   movie-search-app/
├── index.html       # Main HTML file
├── styles.css       # CSS styling
├── script.js        # JavaScript logic
├── db.json          # Movie data
└── README.md        # This file

