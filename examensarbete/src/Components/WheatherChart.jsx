import React, { useEffect, useState } from 'react';

export default function WeatherChart() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,weathercode&timezone=Europe%2FBerlin'
      );
      const data = await response.json();

      const emojis = {
        0: "☀️", 1: "🌤", 2: "⛅️", 3: "☁️", 45: "🌫", 48: "🌫",
        51: "🌦", 61: "🌧", 71: "❄️", 80: "🌧", 95: "⛈"
      };

      const days = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];
      const parsed = data.daily.time.map((date, i) => ({
        day: days[new Date(date).getDay()],
        emoji: emojis[data.daily.weathercode[i]] || "❓",
        temp: data.daily.temperature_2m_max[i]
      }));

      setWeatherData(parsed);
    }

    fetchWeather();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Väderprognos (Stockholm)</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {weatherData.map((day, idx) => (
          <div key={idx} style={{ minWidth: 80 }}>
            <h4>{day.day}</h4>
            <div style={{ fontSize: '2rem' }}>{day.emoji}</div>
            <p>{day.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
