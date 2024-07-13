import {currentWeather} from './fetch.js';
import {format} from 'date-fns';

export const firstCardDom = {
    cityName: document.querySelector('.location'),
    date: document.querySelector('.date'),
    time: document.querySelector('.time'),
    currentTemp: document.querySelector('.current-temp'),
    currentConditionText: document.querySelector('.current-desc'),
    currentConditionIcon: document.querySelector('.current-icon'),
    loadWheel: document.querySelector('.loader'),
}

export function currentLoadingWheel() {
    firstCardDom.loadWheel.style.display = 'block'
}

export function dailyForecastLoadWheel() {
    let loadWheel2 = document.querySelector('.loader2');
    loadWheel2.style.display = 'block';
}

export function hourlyLoadWheel() {
    let loadWheel3 = document.querySelector('.loader3');
    loadWheel3.style.display = 'block';
}

export function loadWheels() {
    currentLoadingWheel()
    dailyForecastLoadWheel()
    hourlyLoadWheel()
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
    try {
        let dailyCardContainer = document.querySelector('.daily-content')
        dailyCardContainer.textContent = "";
        for(let i = 0; i < 3; i++) {
            let dailyCard = document.createElement('div');
            dailyCardContainer.appendChild(dailyCard);
            dailyCard.classList.add(`daily-card${i}`,  'daily-cards');
            
    
            let day = document.createElement('div');
            day.textContent = format(await currentWeather.threeDaysArray[i].date.replace(/-/g, '/'), 'EEEE');
            dailyCard.appendChild(day);
    
            let icon = document.createElement('img');
            icon.src = await currentWeather.threeDaysArray[i].day.condition.icon;
            
            icon.style.cssText = 'width: 100px; height: 100px;'
            dailyCard.appendChild(icon);
            
            let condition = document.createElement('div');
            condition.textContent = await currentWeather.threeDaysArray[i].day.condition.text;
            dailyCard.appendChild(condition);
        
            let temp = document.createElement('div');
            temp.textContent =  `${await currentWeather.threeDaysArray[i].day.avgtemp_f}°F`;
            dailyCard.appendChild(temp);
            temp.classList.add(`dailyTemp${i}`)
    
        }
    } catch(error) {
        console.error(error)
    }

}

export async function makeHourlyCards() {
    let hourlyContent = document.querySelector('.hourly-content');
    hourlyContent.textContent = '';
    try {

        for(let j = 0; j < await currentWeather.threeDaysArray[0].hour.length; j++) {
            let hourlyCard = document.createElement('div');
            hourlyCard.classList.add('hourly-card');
            hourlyContent.appendChild(hourlyCard);
    
            let hourlyTime = document.createElement('div');
            hourlyTime.textContent = format(await currentWeather.threeDaysArray[0].hour[j].time, 'hh:mm aa');
            hourlyCard.appendChild(hourlyTime)
    
            let hourlyTemp = document.createElement('div');
            hourlyTemp.textContent = `${await currentWeather.threeDaysArray[0].hour[j].temp_f}°F / ${currentWeather.threeDaysArray[0].hour[j].temp_c}°C`
            hourlyCard.appendChild(hourlyTemp);
    
            let hourlyIcon = document.createElement('img');
            hourlyIcon.classList.add('hourly-icon');
            hourlyIcon.src = await currentWeather.threeDaysArray[0].hour[j].condition.icon;
            hourlyCard.appendChild(hourlyIcon);
    
            let hourlyCondition = document.createElement('div');
            hourlyCondition.textContent = await currentWeather.threeDaysArray[0].hour[j].condition.text;
            hourlyCard.appendChild(hourlyCondition);
    
            let rainyIcon = document.createElement('div');
            
            rainyIcon.src = "./rainy.svg"
            rainyIcon.classList.add('rainy-icon')
            hourlyCard.appendChild(rainyIcon);
            
            let rainyPercentage = document.createElement('div');
            rainyPercentage.textContent = `${await currentWeather.threeDaysArray[0].hour[j].chance_of_rain}%`
            hourlyCard.appendChild(rainyPercentage);
    
            let windIcon = document.createElement('div');
            windIcon.classList.add('wind-icon');
            windIcon.src = './rainy.svg'
            hourlyCard.appendChild(windIcon);
    
            let windPercent = document.createElement('div');
            windPercent.textContent = `${await currentWeather.threeDaysArray[0].hour[j].wind_mph} mi/h`;
            hourlyCard.appendChild(windPercent);
        }
    } catch(error) {
        console.error(error)
    }


        

}