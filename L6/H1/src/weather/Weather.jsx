import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weather.actions";

const Weather = ({ weatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map((el) => (
          <li className="city" key={el.id}>
            <span className="city__name">{el.name}</span>
            <span className="city__temperature">{`${el.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherData: state,
  };
};

const mapDispatch = {
  getWeatherData,
};

const connector = connect(mapState, mapDispatch);

export default connector(Weather);
