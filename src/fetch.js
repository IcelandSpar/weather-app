import {updateCurrentCard, makeDailyCards, makeHourlyCards, firstCardDom, loadWheels} from './dom.js';
import {currentWeatherTheme} from './weather-theme.js'

export let currentWeather = {

}

export async function getWeather(city = 'detroit') {
  

  try{
    loadWheels()
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=40fe261745dc4f108f063017240307&q=${city}`, {
      mode: 'cors'
    });
  let data = await response.json();
  currentWeather.location = `${await data.location.name}, ${await data.location.region}`
  currentWeather.temp_f = `${await data.current.temp_f}°F`
  currentWeather.temp_c = `${await data.current.temp_c}°C`
  currentWeather.time = await data.location.localtime
  currentWeather.textCondition = await data.current.condition.text
  currentWeather.iconCondition = await data.current.condition.icon

  
  get3Days(city)
  updateCurrentCard()
  currentWeatherTheme(await currentWeather.textCondition)
  firstCardDom.loadWheel.style.display = 'none'
  return data
  } catch (error) {
    console.error(error)
    
  }

}

export async function get3Days(city) {
  try{
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=40fe261745dc4f108f063017240307&q=${city}&days=3`, {
      mode: 'cors'
    });
    const daysData = await response.json();
    
    currentWeather.threeDaysArray = await daysData.forecast.forecastday
    
    makeDailyCards()
    let loadWheel2 = document.querySelector('.loader2');
    loadWheel2.style.display = 'none';
    makeHourlyCards()
    let loadWheel3 = document.querySelector('.loader3');
    loadWheel3.style.display = 'none';
    return console.log(currentWeather.threeDaysArray)
  } catch(error) {
    console.error(error)
  }

}


