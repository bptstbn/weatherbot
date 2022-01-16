const patternDict = [
{
	pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',
	intent : 'Hello'
},
{
	pattern :'\\b(Bye|Exit)\\b',
	intent : 'Exit'
},
{
	pattern: '\\b(Help)\\b',
	intent:'Help'
},
{
	pattern: '\\b(What\'s ?up|How are you?)\\b',
	intent:'How are you'
},
{
	pattern: '\\b(Name)\\b',
	intent:'Name'
},
{
	pattern: '\\b(owner|creator|Who (is|are) your (proprietary|owner)?)\\b',
	intent:'Owner'
},
{
	pattern: '\\b(Thank|Thanks!|Thanks)\\b',
	intent:'Thank'
},
{
	pattern : "((weather|temperature)\\s(like\\s)?in\\b(?<city>.+)\\?)",
	intent:'CurrentWeather'
},
{
	pattern : "((weather|temperature)\\s(like\\s)?in\\b(?<city>.+))",
	intent:'CurrentWeather'
},
{
	pattern: "((will|forecast)\\s(like\\s)?in\\b(?<city>.+)\\?", 
	intent: 'WeatherForecast'
},
{
	pattern: "((will|forecast)\\s(like\\s)?in\\b(?<city>.+)\\s\\b(the\\sday\\safter\\stomorrow|tomorrow)$)", 
	intent: 'WeatherForecast'
},
{
	pattern:"\\b(hot|cold|rainy|sunny)\\b\\s\\b(the\\sday\\safter\\stomorrow|tomorrow|today)\\sin\\s\\b(?<city>[a-z]+[a-z]+?)$",
	intent:'WeatherForecast'
},
{
	pattern:'\\b(hot|cold|rainy|sunny)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)\\b(the\\sday\\safter\\stomorrow|tomorrow|today)$',
	intent: 'WeatherForecast'
}]

module.exports = patternDict;