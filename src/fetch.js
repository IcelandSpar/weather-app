import {updateCurrentCard, makeDailyCards} from './dom.js';


export let currentWeather = {

}

export async function getWeather(city) {
    
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=40fe261745dc4f108f063017240307&q=${city}`, {
    mode: 'cors'
  });
let data = await response.json();
currentWeather.location = `${data.location.name}, ${data.location.region}`
currentWeather.temp_f = `${data.current.temp_f}°F`
currentWeather.temp_c = `${data.current.temp_c}°C`
currentWeather.time = data.location.localtime
currentWeather.textCondition = data.current.condition.text
currentWeather.iconCondition = data.current.condition.icon
console.log(currentWeather)
get3Days(city)
updateCurrentCard()
return data
}

export async function get3Days(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=40fe261745dc4f108f063017240307&q=${city}&days=3`, {
    mode: 'cors'
  });
  const daysData = await response.json();
  
  currentWeather.threeDaysArray = await daysData.forecast.forecastday
  makeDailyCards()
  return console.log(currentWeather.threeDaysArray)
}


