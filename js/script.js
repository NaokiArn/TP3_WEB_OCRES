
// Fonction appelée lors du click du bouton
function start() {

  city = document.getElementById('city-input').value ;
  
  if (city == "")
  {
    city = "Paris";
  }
  
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    secondFunction();
}


// Fonction appelée lors du click du bouton
function secondFunction() {

  city = document.getElementById('city-input').value ;
  
  if (city == "")
  {
    city = "Paris";
  }
  
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchNext3DaysForecast()
    .then(function(response) {

      //Day2
      // Récupère la donnée d'une API
      const data2 = response.data.list[1]; 

      // On récupère l'information principal
      const main2 = data2.weather[0].main;
      const description2 = data2.weather[0].description;
      const temp2 = data2.temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data2.weather[0].icon);

      // Modifier le DOM
      document.getElementById('Day2-forecast-main').innerHTML = main2;
      document.getElementById('Day2-forecast-more-info').innerHTML = description2;
      document.getElementById('icon2-weather-container').innerHTML = icon2;
      document.getElementById('Day2-forecast-temp').innerHTML = `${temp2}°C`;

      //Day3
      // Récupère la donnée d'une API
      const data3 = response.data.list[2]; 

      // On récupère l'information principal
      const main3 = data3.weather[0].main;
      const description3 = data3.weather[0].description;
      const temp3 = data3.temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data3.weather[0].icon);

      // Modifier le DOM
      document.getElementById('Day3-forecast-main').innerHTML = main3;
      document.getElementById('Day3-forecast-more-info').innerHTML = description3;
      document.getElementById('icon3-weather-container').innerHTML = icon3;
      document.getElementById('Day3-forecast-temp').innerHTML = `${temp3}°C`;

      //Day4
      // Récupère la donnée d'une API
      const data4 = response.data.list[3]; 

      // On récupère l'information principal
      const main4 = data4.weather[0].main;
      const description4 = data4.weather[0].description;
      const temp4 = data4.temp.day;
      const icon4 = apiWeather.getHTMLElementFromIcon(data4.weather[0].icon);

      // Modifier le DOM
      document.getElementById('Day4-forecast-main').innerHTML = main4;
      document.getElementById('Day4-forecast-more-info').innerHTML = description4;
      document.getElementById('icon4-weather-container').innerHTML = icon4;
      document.getElementById('Day4-forecast-temp').innerHTML = `${temp4}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
}


