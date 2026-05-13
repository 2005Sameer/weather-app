import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox() {
    const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"; 
    let info = {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity: 47,
        weather: "haze"
    };
    return (
        <div className="InfoBox">
            <h3>Weather Information-{info.weather}</h3>
            <p>Temperature: 25°C</p>
            <p>Humidity: 60%</p>
            <p>Feels Like: 27°C</p>
            <p>Weather: Clear Sky</p>
            <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                   sx={{ height: 140 }}
                   image={INIT_URL}
                   title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature: {info.temp}°C <br></br>
                        Humidity: {info.humidity}% <br></br>
                        Min Temp: {info.tempMin}°C <br></br>
                        Max Temp: {info.tempMax}°C <br></br>
                        Feels Like: {info.feelslike}°C <br></br>
                        Weather: {info.weather}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}