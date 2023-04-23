import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getRandomCity } from './utils';

const API_KEY = '2294588b3a9f3286d6c70b9a5d155365';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg', '/images/image5.jpg'];

  useEffect(() => {
    const fetchData = async () => {
      const cities = [];
      for (let i = 0; i < 5; i++) {
        const city = getRandomCity();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const imageIndex = Math.floor(Math.random() * images.length);
        cities.push({ ...response.data, imageIndex });
      }
      setWeatherData(cities);
      setLoading(false);
    };
    fetchData();
    
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [imageIndex, images.length]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!weatherData) {
    return <p>No se pudo cargar el clima</p>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <br/>
      <h1 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16 }}>Clima en 5 ciudades aleatorias</h1>
      <br/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
        {weatherData.map((data, index) => {
          const temperature = Math.round(data.main.temp - 273.15);
          const isThird = index === 2;
          return (
            <div key={index} className={isThird} style={{ textAlign: 'center', width: 300 }}>
              <img src={images[data.imageIndex]} alt="Imagen" style={{ width: '100%', height: '200px', marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, marginBottom: 8 }}>{data.name}</h2>
              <p style={{ fontSize: 16, marginBottom: 8 }}>{data.weather[0].description}</p>
              <p style={{ fontSize: 24 }}>{temperature}°C</p>
            </div>
          );
        })}
      </div>

    </div>
  );
  

  
};

export default Weather;