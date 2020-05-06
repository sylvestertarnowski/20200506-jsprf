
/**
  #Task:
  1. Run the examples in jsbin.com / browser environment.
  2. Compare code inputs, but not only ...
  3. ... see which APIs are used by each method

  #Goal:
  Showing "fetch" as modern replacement for AJAX calls
*/

(function getDataInVanillaJS() {

  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onload = function() {
    console.log('getDataInVanillaJS', this.responseText);
  };
  xmlHttp.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
  xmlHttp.send();
}());

function getDataWithJQuery() {
  // fake jQuery
  const $ = { getJSON() {} };

  $.getJSON('https://jsonplaceholder.typicode.com/users/1', (user) => {
    console.log('getDataWithJQuery', user)
  });
}

function getDataWithAxios() {
  // fake axios
  const axios = { get: () => Promise.resolve({}) };

  axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      console.log('getDataWithAxios',  response.data)
    });
}

function getDataWithModernJavaScriptAPI() {

  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => console.log('getDataWithModernJavaScriptAPI', user));
}

// W do not need a DOM, but BOM would be useful :)
getDataWithModernJavaScriptAPI()
