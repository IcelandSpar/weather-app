import {firstCardDom} from './dom.js';
import {currentWeather} from './fetch.js';

let changeUnitBtn = document.querySelector('.change-units');

export function changeUnitBtnFunc() {
   
    changeUnitBtn.addEventListener('click', () => {
        let dailyTemp0 = document.querySelector('.dailyTemp0');
        let dailyTemp1 = document.querySelector('.dailyTemp1');
        let dailyTemp2 = document.querySelector('.dailyTemp2');
        if(firstCardDom.currentTemp.textContent == currentWeather.temp_f) {
            firstCardDom.currentTemp.textContent = currentWeather.temp_c
            dailyTemp0.textContent = `${currentWeather.threeDaysArray[0].day.avgtemp_c}°C`
            dailyTemp1.textContent = `${currentWeather.threeDaysArray[1].day.avgtemp_c}°C`
            dailyTemp2.textContent = `${currentWeather.threeDaysArray[2].day.avgtemp_c}°C`
        } else {
            firstCardDom.currentTemp.textContent = currentWeather.temp_f
            dailyTemp0.textContent = `${currentWeather.threeDaysArray[0].day.avgtemp_f}°F`
            dailyTemp1.textContent = `${currentWeather.threeDaysArray[1].day.avgtemp_f}°F`
            dailyTemp2.textContent = `${currentWeather.threeDaysArray[2].day.avgtemp_f}°F`
        }
        

        
    })
}
