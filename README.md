
# Bus Tracker 🚌

This project is a web-based application that simulates the movement of a bus through a series of bus stops using the Google Maps JavaScript API. It demonstrates various JavaScript concepts, including asynchronous programming, working with external APIs, and using JSON data for styling and configuration.

## Table of Contents
1. [Concepts](#concepts)
2. [How It Works](#how-it-works)
3. [Run Locally](#run-locally)
4. [Roadmap](#roadmap)
5. [License](#license)
## Concepts

- Asynchronous Programming: The code uses async/await and Promise-based functions to fetch map styles from an external JSON file.
- External APIs: The Google Maps JavaScript API is used to display an interactive map and place a custom marker on it.
- JSON Data: The map styles are fetched from a JSON file, demonstrating how to load and parse JSON data in JavaScript.
- Array and Loop: The busStops array stores the coordinates of each bus stop, and the move function iterates through these stops using a counter.


## How It Works
- busStops is an array that stores the latitude and longitude coordinates of each bus stop.

- map and marker are variables that store the Google Maps Map and Marker instances, respectively.

- counter is a variable that keeps track of the current bus stop.

- fetchMapStyles(): Fetches the map styles from an external JSON file and returns a Promise that resolves to the parsed JSON data.

- initMap(): An asynchronous function that initializes the Google Maps Map instance with the fetched map styles and places a custom bus marker on the first bus stop.

- move(): A recursive function that moves the bus marker through the bus stops with a 1-second delay between each stop. The function stops when all bus stops have been visited.

The application starts by initializing the Google Maps Map instance, placing a bus marker on the first bus stop. The user can trigger the bus movement simulation by calling the move function, which moves the bus marker through the bus stops with a 1-second delay between each stop.
## Run Locally

Click the green code button and download the zip file. Open the index.html file and view the interactive application in your browser.


## Roadmap

- Get the Marin County transit API to work so I can track the bus in real time. Get the custom colors to apply to the Google map. 


## License

[MIT](https://choosealicense.com/licenses/mit/)

