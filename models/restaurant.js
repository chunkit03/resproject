var mongoose = require('mongoose');

var restSchema = mongoose.Schema({
	address:
{
		street:String,
		zipcode:String,
		building:String,	
	}
	,
	borough:String,
	cuisine:String,
	name: String,
	lon: String,
	lat: String,
	restaurant_id: Number,

		  image: {
			"title": "Image file",
			"type": "string",
			"format": "base64",
			"maxSize": "500000"
		  }
		
	  


});

module.exports = restSchema;
