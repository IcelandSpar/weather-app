import {getWeather} from './fetch.js'


const searchInput = {
    searchField: document.querySelector('#city'),
    searchBtn: document.querySelector('.search-icon'),
}

export function getUserCity() {
    let cityName = '';
    searchInput.searchBtn.addEventListener('click', () => {
        
        cityName =  searchInput.searchField.value;
        getWeather(cityName)
        
    })

    searchInput.searchField.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            
            cityName = searchInput.searchField.value;
            getWeather(cityName)
        }
    })
}
