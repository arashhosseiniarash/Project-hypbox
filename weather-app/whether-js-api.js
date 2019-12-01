// const weatherService = 'http://api.darksky.net/forecast/';
// const key = 'a9c2384166485c52f088cb36223e2559';
// let lat = '37.8267';
// let lng = '-122.4233';


// function getWeather(lat, long) {
//   return {
//     temp: '400',
//     humi: '200'
//   }
// }
//
// function updateView() {
//
//
//
// }

function getSelectedCityLatLong() {
  return {lat: 40.712776, long: -74.005974}
}

function getCityWeather() {
  // 1. get selected city lat,long
  const selectedLatLong = getSelectedCityLatLong();


  // 2. send selected lat,long to API to get weather forecast
  const url = "http://cloud.hypbox.com/weather/montreal";
  $.ajax({
    url: url,
    method: 'GET',
    crossDomain: true,
    success: function (data) {
      console.log('here', data)
    }
  });
  // $.get(url, function (data) {
  //   console.log(data)
  // });


  // 3. update view based on received info form API
}