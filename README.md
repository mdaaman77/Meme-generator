# Random GIF Generator

A React-based web application that allows users to generate and view random GIFs using the GIPHY API.

## Features

- Generate random GIFs
- Search GIFs by tags
- Responsive design with Tailwind CSS
- Custom loading spinner
- Beautiful dotted background pattern

## Tech Stack

- React.js
- Tailwind CSS
- Axios
- GIPHY API

## Available Scripts
npm start - Runs the app in development mode
npm test - Launches the test runner
npm run build - Builds the app for production
npm run eject - Ejects from Create React App
Components
Random - Generates completely random GIFs
Tag - Allows searching GIFs by tags
Spinner - Custom loading animation

## API Integration
The app uses the GIPHY API for fetching GIFs. The integration is handled through a custom hook useGif which manages:

## API calls
Loading states
Error handling
Styling
Uses Tailwind CSS for styling
Custom background pattern
Responsive design for various screen sizes

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd memegenerator
