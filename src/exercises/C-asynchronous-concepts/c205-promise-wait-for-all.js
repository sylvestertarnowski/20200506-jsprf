
/**
  #Task:
  Download weather data to have access to all of it at one place.
  For further weather calculations

  #Goal:
  Learning / remind of the API that allows you to perform calculations when all asynchronous data
  will be provided
*/
const weatherStation = {
  fetchWindSpeed: () => Promise.resolve( 13 ),
  fetchWindDirection: () => Promise.resolve( 'NW' ),
  fetchHumidity: () => Promise.resolve( 61 ),
  fetchPressure: () => Promise.resolve( 1020 ),
  fetchCloudCover: async () => 88 ,
};

(function canMyKiteFlyToday() {
  // Your solution:
  // We write only here!

})();

