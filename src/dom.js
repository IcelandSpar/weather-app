import {currentWeather} from './fetch.js';
import {format} from 'date-fns';

export const firstCardDom = {
    cityName: document.querySelector('.location'),
    date: document.querySelector('.date'),
    time: document.querySelector('.time'),
    currentTemp: document.querySelector('.current-temp'),
    currentConditionText: document.querySelector('.current-desc'),
    currentConditionIcon: document.querySelector('.current-icon'),
}



export async function updateCurrentCard() {
    
    firstCardDom.cityName.textContent = await currentWeather.location;
    firstCardDom.date.textContent =  format(await currentWeather.time, 'E MMM dd yyyy,');
    firstCardDom.time.textContent = format(await currentWeather.time, 'hh:mm aa')// hh:mm aa
    firstCardDom.currentTemp.textContent = await currentWeather.temp_f
    firstCardDom.currentConditionText.textContent = await currentWeather.textCondition
    firstCardDom.currentConditionIcon.src = await currentWeather.iconCondition
}

export async function makeDailyCards() {
    let dailyCardContainer = document.querySelector('.daily-content')
    dailyCardContainer.textContent = "";
    for(let i = 0; i < 3; i++) {
        let dailyCard = document.createElement('div');
        dailyCardContainer.appendChild(dailyCard);
        dailyCard.classList.add(`daily-card${i}`,  'daily-cards');
        

        let day = document.createElement('div');
        day.textContent = format(currentWeather.threeDaysArray[i].date.replace(/-/g, '/'), 'EEEE');
        dailyCard.appendChild(day);

        let icon = document.createElement('img');
        icon.src = await currentWeather.threeDaysArray[i].day.condition.icon;
        console.log(currentWeather.threeDaysArray[i].day.condition.icon)
        icon.style.cssText = 'width: 100px; height: 100px;'
        dailyCard.appendChild(icon);
        
        let condition = document.createElement('div');
        condition.textContent = await currentWeather.threeDaysArray[i].day.condition.text;
        dailyCard.appendChild(condition);
    
        let temp = document.createElement('div');
        temp.textContent = await `${currentWeather.threeDaysArray[i].day.avgtemp_f}°F`;
        dailyCard.appendChild(temp);
        temp.classList.add(`dailyTemp${i}`)

    }
}