# Flights Observer
## A single page application that provides information about international flights around the world
___

### Project setup
```
git clone git@github.com:Equinoz/flights_observer.git
cd flights_observer
npm install
```
Then configure the `.env` file:
- You need an account on https://opensky-network.org/ to determine `REACT_APP_OPENSKY_USERNAME` and `REACT_APP_OPENSKY_PASSWORD` values  
- You also need a google account to use the "Maps Embed API" https://developers.google.com/maps/documentation/embed/get-started and determine `REACT_APP_MAPS_EMBED_API_KEY` value  

### Run a web server at localhost:3000
```
npm run start
```

### Compiles for production
```
npm run build
```