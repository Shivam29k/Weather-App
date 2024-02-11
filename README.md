# Weather App

This project is a weather application built with React. It uses the OpenWeatherMap API to fetch weather data based on the user's location.

[Click here to try it out yourself](https://weather-app-shivam.vercel.app/)

### [Follow this thread if you wanna make your own](https://twitter.com/ShivamKrandom/status/1756627245710316016)

## Project Structure

The project is structured into several components, each responsible for a specific part of the application:

- `App.jsx`: This is the main component that wraps all other components.
- `Navbar.jsx`: This component contains the navigation bar of the application.
- `Home.jsx`: This is the home component of the application.
- `Weather.jsx`: This component is responsible for displaying the weather information.
- `Search.jsx`: This component allows users to search for a location and fetches the weather data for that location.

The weather data is fetched from the [OpenWeatherMap current API](https://openweathermap.org/current) using the `loadWeather` function in `weatherAPI.js` and the location data is fetched from [GeoDB Cities RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities/) using the `getLocation` function in `locationAPI.js`

## Key Learnings

This project provided an opportunity to learn and practice several key concepts in React and JavaScript:

- **React Hooks**: The project uses React Hooks (`useState` and `useEffect`) extensively for managing state and side effects in functional components.
- **API Integration**: The project integrates with the OpenWeatherMap API to fetch and display weather data.
- **CSS Styling**: The project uses CSS for styling the components. The styles are defined in `index.css`.
- **Modular Design**: The project is structured into several components, promoting code reusability and separation of concerns.
- **Async/Await**: The project uses async/await for handling promises.

## Installation/Setup

To run this project, you need to have Node.js and npm installed on your machine.

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## Dependencies

The project uses several dependencies:

- `react`: For building the user interface.
- `react-dom`: For rendering the components into the DOM.
- `axios`: For making HTTP requests to the OpenWeatherMap API.
- `react-select-async-paginate`: For creating the search component with asyncPaginate

## Future Improvements

- Add more detailed weather information.
- Improve the user interface and user experience.
- Add tests for the components.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.


# Preview

![preview](/src/assets/weather-app.gif)