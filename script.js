let url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'your-key-env',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};


async function fetchWeather() {

try {
	const response = await fetch(url, options);
	const result = await response.json();
	region.innerHTML=result.location.region;
	country.innerHTML=result.location.country;
	lat.innerHTML=result.location.lat;
	lon.innerHTML=result.location.lon;

	temp_c.innerHTML=result.current.temp_c;
	temp_f.innerHTML=result.current.temp_f;
	Cond.innerHTML=result.current.condition.text;
	cld.innerHTML=result.current.cloud;

	winsp.innerHTML=result.current.wind_mph;
	winddir.innerHTML=result.current.wind_dir;
	press.innerHTML=result.current.pressure;
	heat_In.innerHTML=result.current.heatindex_c;

	Region.innerHTML=result.location.region;
	Weather.innerHTML=result.current.temp_c+"°C";
	WindS.innerHTML=result.current.wind_mph+"mph";
	console.log(result);
} catch (error) {
	console.error(error);
}
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	url="https://weatherapi-com.p.rapidapi.com/current.json?q="+inp_val.value;
	cityName.innerHTML=inp_val.value;
	fetchWeather();
})

delhi.addEventListener("click",(e)=>{
	e.preventDefault();
	url="https://weatherapi-com.p.rapidapi.com/current.json?q=delhi";
	cityName.innerHTML="Delhi";
	fetchWeather();
})

mumbai.addEventListener("click",(e)=>{
	e.preventDefault();
	url="https://weatherapi-com.p.rapidapi.com/current.json?q=mumbai";
	cityName.innerHTML="Mumbai";
	fetchWeather();
})

toronto.addEventListener("click",(e)=>{
	e.preventDefault();
	url="https://weatherapi-com.p.rapidapi.com/current.json?q=toronto";
	cityName.innerHTML="Toronto";
	fetchWeather();
})
	// Call the function
	// fetchWeather();
	// let region=document.getElementById("region")
	// let country=document.getElementById("country")
	// let lat=document.getElementById("lat")
	// let lon=document.getElementById("lon"),
	// 	temp_c=document.getElementById("temp_c"),
	// 	temp_f=document.getElementById("temp_f"),
	// 	cond=document.getElementById("cond"),
	// 	cld=document.getElementById("cld"),
	// 	winsp=document.getElementById("winsp"),
	// 	winddir=document.getElementById('wind_dir'),
	// 	press=document.getElementById("press"),
	// 	heat_In=document.getElementById("heat_In");
	// let inp_val=document.getElementById("inp_val");
	// let submit=document.getElementById("submit");
	// let cityName=document.getElementById("cityName");