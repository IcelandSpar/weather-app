import {firstCardDom} from './dom.js';
import cloudy from './cloudy.jpg';
import rain from './raining-house.jpg';
import sunset from './sunset.png';
import storm from './storm.jpg';
import clear from './clear.png';
import snow from './snow.jpg'

export async function currentWeatherTheme(condition) {
    
    if (await condition.includes('storm') || await condition.includes('lightning') || await condition.includes('thunder') || await condition.includes('Thundery') || await condition.includes('Thunder')) {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#2E3F59, #171D2D)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await storm})`
    } else if (await condition.includes('snow') || await condition.includes('freeze') || await condition.includes('hail') || await condition.includes('freez') || await condition.includes('Freez') || await condition.includes('Ice') || await condition.includes('ice')) {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#ABB9BC, #343440)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await snow})`
    } else if (await condition.includes('rain') || await condition.includes('drizzle') || await condition.includes('Rain')) {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#CDDBDE, #436883)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await rain})`
    } else if (await condition.includes('sunny')) {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#da673a, #1B1F3A)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await sunset})`
    } else if (await condition.includes('clear') || await condition.includes('Clear')) {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#436883, #5F666E)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await clear})`
    } else if (await condition.includes('cloudy') || await condition.includes('Overcast') || await condition.includes('overcast') || await condition.includes('Cloud') || await condition.includes('fog') || await condition.includes('Fog')) {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#344964, #303940)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await cloudy})`
    } else {
        firstCardDom.contentContainer.style.backgroundImage = 'linear-gradient(#da673a, #1B1F3A)';
        return firstCardDom.currentContent.style.backgroundImage = `url(${await sunset})`
    }

}