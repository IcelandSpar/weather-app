import {getWeather} from './fetch.js'

const searchInput = {
    searchField: document.querySelector('#city'),
    searchBtn: document.querySelector('.search-icon'),
}

export function getUserCity() {
    let cityName = '';
    searchInput.searchBtn.addEventListener('click', async () => {
        
        cityName = await searchInput.searchField.value;
        getWeather(cityName)
        
    })

    searchInput.searchField.addEventListener('keypress', async (e) => {
        if (e.key == 'Enter') {
            cityName = await searchInput.searchField.value;
            getWeather(cityName)
        }
    })
}
