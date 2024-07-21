import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 37.98,
        humidity: 25,
        temp: 38.05,
        tempMax: 38.05,
        tempMin: 38.05,
        weather: "haze"
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    return (
      <div style={{textAlign: "center"}}>
          <h2>Weather app by Nitin</h2>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
      </div>
    );
} 