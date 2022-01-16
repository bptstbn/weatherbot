'use strict';
const axios = require('axios');
const privatekey = require('../apikey');


const getForecast = locationKey => 
{
	return new Promise(async (resolve, reject) => 
	{
		try
		{
			const response = await axios.get(
			'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationKey,
			{
				params: 
				{
					apikey: privatekey
				}
			});
			resolve(response.data);
		} 
		catch(error)
		{
			reject(error);
		}
	});
}


module.exports = getForecast;