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

export function makeHourlyCards() {
    let hourlyContent = document.querySelector('.hourly-content');
    hourlyContent.textContent = '';
    for(let j = 0; j < currentWeather.threeDaysArray[0].hour.length; j++) {
        let hourlyCard = document.createElement('div');
        hourlyCard.classList.add('hourly-card');
        hourlyContent.appendChild(hourlyCard);

        let hourlyTime = document.createElement('div');
        hourlyTime.textContent = format(currentWeather.threeDaysArray[0].hour[j].time, 'hh:mm aa');
        hourlyCard.appendChild(hourlyTime)

        let hourlyTemp = document.createElement('div');
        hourlyTemp.textContent = `${currentWeather.threeDaysArray[0].hour[j].temp_f}°F / ${currentWeather.threeDaysArray[0].hour[j].temp_c}°C`
        hourlyCard.appendChild(hourlyTemp);

        let hourlyIcon = document.createElement('img');
        hourlyIcon.classList.add('hourly-icon');
        hourlyIcon.src = currentWeather.threeDaysArray[0].hour[j].condition.icon;
        hourlyCard.appendChild(hourlyIcon);

        let hourlyCondition = document.createElement('div');
        hourlyCondition.textContent = currentWeather.threeDaysArray[0].hour[j].condition.text;
        hourlyCard.appendChild(hourlyCondition);

        let rainyIcon = document.createElement('div');
        
        rainyIcon.src = "./rainy.svg"
        rainyIcon.classList.add('rainy-icon')
        hourlyCard.appendChild(rainyIcon);
        
        let rainyPercentage = document.createElement('div');
        rainyPercentage.textContent = `${currentWeather.threeDaysArray[0].hour[j].chance_of_rain}%`
        hourlyCard.appendChild(rainyPercentage);

        let windIcon = document.createElement('div');
        windIcon.classList.add('wind-icon');
        windIcon.src = './rainy.svg'
        hourlyCard.appendChild(windIcon);

        let windPercent = document.createElement('div');
        windPercent.textContent = `${currentWeather.threeDaysArray[0].hour[j].wind_mph} mi/h`;
        hourlyCard.appendChild(windPercent);
    }

        

}