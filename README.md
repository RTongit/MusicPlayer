# Music Player

## Description

This is a simple web-based music player that allows users to play, pause, and navigate through a selected audio file. It includes a progress bar for tracking playback and basic controls for interacting with the music.

## Features

- Play and pause functionality
- Forward and backward navigation
- Progress bar for tracking playback
- Responsive and user-friendly interface
- Uses FontAwesome icons for controls
- Elegant design with animations and shadow effects
- JavaScript-based progress tracking

## Installation
1. Create a folder.Open it with terminal

2. Copy the following code and paste it inside the terminal (cloning repository):
   ```sh
   git clone https://github.com/RTongit/MusicPlayer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd MusicPlayer
   ```
3. Open `index.html` in a web browser.

## Usage

1. Click the play button to start playing the audio.
2. Use the progress bar to seek within the track.
3. Click the forward or backward buttons to navigate.
4. Click the pause button to stop playback.

## File Structure

- `index.html` - Main HTML file for the music player interface
- `style.css` - Styling file for the UI
- `script.js` - JavaScript file for handling player controls
- `audio/` - Folder containing the audio files
- `icons/` - Folder containing images used in the player

## JavaScript Functionality

- `playPause()`: Handles play and pause functionality by toggling between play and pause icons.
- `progress.addEventListener("change", ...)` : Allows users to manually seek within the track.
- Uses `setInterval()` to update the progress bar while the audio is playing.
- Dynamically updates the control icon between play and pause states.

## Styling (CSS)

- Uses `Poppins` font from Google Fonts.
- Background features a dark theme with a soft pink music player card.
- Music player UI includes:
  - Circular image display with a border and shadow effect.
  - Stylish playback controls with hover effects and shadow.
  - Progress bar with custom styling.
- Responsive design to fit different screen sizes.

## Technologies Used

- HTML5 for structure
- CSS3 for styling and animations
- JavaScript for interactivity
- Google Fonts (`Poppins`)
- FontAwesome for icons

## License

This project is open-source and available under the MIT License.

## Contact

For any questions or suggestions, feel free to contact [rohantamuli27@gmail.com].

