import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9e77e411b9e4da091d81883379f7b980";

    let getWeatherInfo = async () => {
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
       return result;
       }catch(err) {
        throw err;
       }
    };

    let handleInput = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
       }catch(err) {
        setErr(true);
       }
    };

    return (
        <div className='SearchBox' onSubmit={handleSubmit}>
            <form>
            <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={handleInput}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            {err && <p style={{color: "red"}}>No such place exists</p>}
            </form>
        </div>
    );
}