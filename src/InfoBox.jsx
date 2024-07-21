import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    let INIT_URL = "https://media.istockphoto.com/id/140469297/photo/sandstorm-driving.jpg?s=612x612&w=is&k=20&c=Rv7w7KUlNlts7CyI_QRg_jpcS4hSD7aweOJNT_xDSK8=";
    let COLD_URL = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    { info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    {info.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component={"span"}>
                      <p>Temperature = {info.temp}&deg;C</p>
                      <p>Humidity = {info.humidity}</p>
                      <p>Min Temp = {info.tempMin}&deg;C</p>
                      <p>Max Temp = {info.tempMax}&deg;C</p>
                      <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>

                  </Typography>
                </CardContent>
             </Card>
             </div>
        </div>
    );
}