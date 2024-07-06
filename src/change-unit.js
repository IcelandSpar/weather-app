import {updateCurrentCard, firstCardDom} from './dom.js';
import {currentWeather} from './fetch.js'

let changeUnitBtn = document.querySelector('.change-units');

export function changeUnitBtnFunc() {
    changeUnitBtn.addEventListener('click', () => {
        if(firstCardDom.currentTemp.textContent == currentWeather.temp_f) {
            firstCardDom.currentTemp.textContent = currentWeather.temp_c
        } else {
            firstCardDom.currentTemp.textContent = currentWeather.temp_f
        }
        
    })
}
