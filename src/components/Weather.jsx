import { useState } from "react";
import axios from "axios";

const Weather = ({ weatherInfo, citySave, handleSubmit }) => {
  const [isCelsius, setisCelsius] = useState(true);

  //recibe weatherInfo que es la informacion del useState
  console.log({ weatherInfo });

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1);
  };

  const kelvinToFarenheit = (tempKelvin) => {
    return (((tempKelvin - 273.15) * 9) / 5 + 32).toFixed(1);
  };

  const handleChangeUnitTemp = () => {
    setisCelsius(!isCelsius);
  };

  const resultTempConversion = isCelsius
    ? kelvinToCelsius(citySave?.main.temp)
    : kelvinToFarenheit(citySave?.main.temp);
  return (
    <section className="text-center bg-cover bg-center">
      <div className="flex items-center items-baseline items-stretch rounded-md overflow-hidden max-w-max mx-auto border">
        <img className="h-12 mr-5" src={"/icontwc.gif"} alt="" />
        <h1 className="p-1 text-3xl ">THE WEATHER CHANNEL</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex rounded-md overflow-hidden max-w-max mx-auto p-5"
      >
        <input
          id="cityName"
          placeholder="Type City ..."
          className="text-black p-2"
          type="text"
        />
        <button className=" bg-slate-900 hover:bg-cyan-900 font-bold border border-teal-600 px-4">
          Search
        </button>
      </form>
      <h1 className="p-2 text-3xl">{citySave?.name}</h1>

      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/*Secion superior*/}
        <section className="bg-black/60 p-2 rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2 text-3xl">
            {citySave?.weather[0].description}
          </h4>
          <span className="text-4xl">
            {resultTempConversion}°{isCelsius ? "C" : "F"}
          </span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${citySave?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>

        {/*seccion inferior*/}
        <section className="bg-black/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/wind.gif"} alt="" />
            </div>
            <span>{citySave?.wind.speed}m/s </span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/humidity.gif"} alt="" />
            </div>
            <span>{citySave?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
              <img src={"/images/pressure.gif"} alt="" />
            </div>
            <span>{citySave?.main.pressure}hPa</span>
          </article>
        </section>
      </section>
      <button
        onClick={handleChangeUnitTemp}
        className="mt-4 bg-gray-500 text-black      bg-slate-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 border border-teal-600 rounded-2xl"
      >
        {" "}
        {isCelsius ? "Change to Farenheit" : "Change to Celsius"}
      </button>
    </section>
  );
};
export default Weather;
