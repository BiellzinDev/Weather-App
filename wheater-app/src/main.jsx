import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Search from './Search.jsx'
import WeatherCard from './WeatherCard.jsx'
import WeatherDetails from './WeatherDetails.jsx'
import DailyForecast from './DailyForecast.jsx'
import HourlyForecast from './HourlyForecast.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout/>
  </StrictMode>,
)
