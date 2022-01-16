'use strict';
const axios = require('axios');
const privatekey = require('../apikey');


const getLocation = city => 
{
	return new Promise(async (resolve, reject) => 
	{
		try
		{
			const response = await axios.get( //get weather info from the api
			// 349727
			'http://dataservice.accuweather.com/locations/v1/cities/search',
			{
				params: 
				{
					apikey: privatekey,
					q: city
				}
			});
			resolve(response.data[0]) ;
		} 
		catch(error)
		{
			reject(error);
		}
	});
}


module.exports = getLocation;
