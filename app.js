'use strict';
const Readline = require('readline');
const colors = require('colors');
const rl = Readline.createInterface(
{
	input : process.stdin,
	output : process.stdout,
	terminal : false
})

const matcher = require('./matcher');
const getLocation = require('./location');
const getWeather = require('./weather');
const getForecast = require('./forecast');


rl.setPrompt ('>');
rl.prompt ();


function capitalize(string)
{
  return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}


rl.on('line', reply => {matcher(reply,cb => 
{ 
	switch(cb.intent)
	{
		case "Hello":
      console.log((capitalize(cb.entities.groups.greeting) + ' ! Nice to meet you').green);
      break;
    case "Help":
      console.log("How can I help you ?".green);
      break;
    case "How are you" :
      console.log("I'm fine thanks".green);
      break;
    case "Name" :
      console.log("My name is weatherBot").green;
      break;
    case "Owner" :
      console.log("My creators are Baptiste Bony and Jérémie Berrebi").green;
      break;
    case "Thank" :
      console.log("You are welcome").green;
      break;
    case "CurrentWeather":
      var city = cb.entities.groups.city.trim();
      (async () => 
      {
        var location = await getLocation(city);
        try
        {
          var locationKey = location.Key;
          var weather = await getWeather(locationKey);
          console.log(('Here is the current weather in ' + location.EnglishName + ', ' + location.Country.EnglishName 
          + ' : ' + weather.WeatherText.toLowerCase()  + '. With a temperature of ' + weather.Temperature.Metric.Value + '°C').green);
        }
        catch
        {
          console.log(("I don't know any city named " + city + ". Maybe you misspelled it").yellow);
        }
      })();
      break;
    case 'WeatherForecast':
      var city = cb.entities.groups.city.trim();
      (async () => 
      {
        var location = await getLocation(city);
        try
        {
          var locationKey = location.Key;
          var forecast = await getForecast(locationKey);
          console.log(forecast.Headline.Text + ' in ' + location.EnglishName + ', ' + location.Country.EnglishName);
        }
        catch
        {
          console.log(("I don't know any city named " + city + ". Maybe you misspelled it").yellow);
        }
      })();
      break;
    case "Exit":
    	console.log("See you later !".green);
    	process.exit(0);
    	break;
    default :
    	console.log("Sorry, I don't understand. Could you rephrase yout sentence please?".yellow);
      break;
    }
  })
});