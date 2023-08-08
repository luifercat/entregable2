import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setweatherInfo] = useState(null);
  const [isCityInfo, setisCityInfo] = useState(null);

  const API_KEY = "8bbfd19802f6148fe0be974e2f8d92bd";

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios //recover info from url
      .get(url)
      .then(({ data }) => {
        setweatherInfo(data);
        console.log("data = " + data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = e.target.cityName.value;
    const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios //recover info from urlCity
      .get(urlCity)
      .then(({ data }) => {
        setisCityInfo(data);
        console.log({ isCityInfo });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const citySave = isCityInfo === null ? weatherInfo : isCityInfo;

  const icons = {
    //array weather background
    "01d": "bg-[url('/images/bg01.jfif')] bg-cover bg-center",
    "02d": "bg-[url('/images/bg02.jfif')] bg-cover bg-center",
    "03d": "bg-[url('/images/bg03.jfif')] bg-cover bg-center",
    "04d": "bg-[url('/images/bg08.jfif')] bg-cover bg-center",
    "09d": "bg-[url('/images/bg05.jfif')] bg-cover bg-center",
    "10d": "bg-[url('/images/bg06.jfif')] bg-cover bg-center",
    "11d": "bg-[url('/images/bg09.jfif')] bg-cover bg-center",
    "13d": "bg-[url('/images/bg07.jfif')] bg-cover bg-center",
    "50d": "bg-[url('/images/bg04.jfif')] bg-cover bg-center",
    "01n": "bg-[url('/images/01n.jpg')] bg-cover bg-center",
    "02n": "bg-[url('/images/02n.jpg')] bg-cover bg-center",
    "03n": "bg-[url('/images/03n.jpg')] bg-cover bg-center",
    "04n": "bg-[url('/images/04n.jpg')] bg-cover bg-center",
    "09n": "bg-[url('/images/09n.jpg')] bg-cover bg-center",
    "10n": "bg-[url('/images/10n.jpg')] bg-cover bg-center",
    "11n": "bg-[url('/images/11n.jpg')] bg-cover bg-center",
    "13n": "bg-[url('/images/13n.jpg')] bg-cover bg-center",
    "50n": "bg-[url('/images/50n.jpg')] bg-cover bg-center",
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success); // navigator object
  }, []);

  return (
    <main
      className={`bg-black min-h-screen text-white font-lato flex justify-center items-center px-4 ${
        icons[citySave?.weather[0].icon]
      }`}
    >
      {/* pasa al componente weather una prop y una lleve, en este caso watherInfo = {weatherInfo} */}
      <Weather
        weatherInfo={weatherInfo}
        citySave={citySave}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
