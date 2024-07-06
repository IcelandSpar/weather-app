import './styles.css';
import { getUserCity } from './search.js';
import { getWeather } from './fetch.js';
import { changeUnitBtnFunc } from './change-unit.js'
import { makeDailyCards } from './dom.js'

 //default city
getWeather('detroit');
changeUnitBtnFunc()
getWeather(getUserCity());
makeDailyCards()

