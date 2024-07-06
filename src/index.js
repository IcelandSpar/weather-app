import './styles.css';
import {getUserCity} from './search.js';
import { getWeather } from './fetch.js';
import {changeUnitBtnFunc} from './change-unit.js'
changeUnitBtnFunc()
getWeather(getUserCity());


