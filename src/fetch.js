import {updateCurrentCard} from './dom.js';
import {format} from 'date-fns';

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
currentWeather.time = format(data.location.localtime, 'E MMM dd yyyy, hh:mm aa')
currentWeather.textCondition = data.current.condition.text
currentWeather.iconCondition = data.current.condition.icon
console.log(currentWeather)
updateCurrentCard()
return data
}




