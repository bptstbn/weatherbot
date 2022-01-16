'use strict';
const axios = require('axios');
const privatekey = require('../apikey');


const getWeather = locationKey => 
{
	return new Promise(async (resolve, reject) => 
	{
		try
		{
			const response = await axios.get(
			'http://dataservice.accuweather.com/currentconditions/v1/' + locationKey,
			{
				params: 
				{
					apikey: privatekey
				}
			});
			resolve(response.data[0]);
		}
		catch(error)
		{
			reject(error);
		}
	});
}


module.exports = getWeather;