import {currentWeather} from './fetch.js';

export const firstCardDom = {
    cityName: document.querySelector('.location'),
    dateTime: document.querySelector('.date'),
    currentTemp: document.querySelector('.current-temp'),
    currentConditionText: document.querySelector('.current-desc'),
    currentConditionIcon: document.querySelector('.current-icon'),
}

export async function updateCurrentCard() {
    
    firstCardDom.cityName.textContent = await currentWeather.location;
    firstCardDom.dateTime.textContent = await currentWeather.time;
    firstCardDom.currentTemp.textContent = await currentWeather.temp_f
    firstCardDom.currentConditionText.textContent = await currentWeather.textCondition
    firstCardDom.currentConditionIcon.src = await currentWeather.iconCondition
}