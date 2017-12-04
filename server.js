var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongodburl = 'mongodb://chunkit:chunkit0303@ds125195.mlab.com:25195/chunkit';
var restSchema = require('./models/restaurant');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var formidable = require('formidable');
var multer = require('multer');
//var router = express.Router();
//var User = require('./lib/User');
//var routes = require('./routes/imagefile');


/*router.get('/',function(req,res,next){
res.render('index',{title:'Express'});
});
*/
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('/public'));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');




});


app.post('/login',function(req,res){

if(req.body.username=='admin'&&req.body.password=='admin'||
req.body.username=='peter'&&req.body.password=='peter'||
req.body.username=='demo'&&req.body.password=='demo'){


	res.redirect('/function');
}

})

app.get('/function',function(req,res){

	res.sendFile(__dirname + '/public/function.html');


})



/*
app.post('/login',function(req,res){
	var user_name=req.body.user;
	var password=req.body.password;
	console.log("User name = "+user_name+", password is "+password);
	res.redirect('/function.html');
	res.end("yes");
  });
*/
/*
router.get('/register',function(req,res){
	res.sendFile(__dirname + '/public/register.html');

res.sendFile(__dirname + '/public/register.html');


});
*/
/*


router.post('/login',function(req,res){

	var username= req.body.username;
	var password = req.body.password;

	User.findOne({username:username,password:password},function(err,user){

if(err){
	console.log(err);
	return res.status(500).send();

}

if(!user){
return res.status(404).send();


}

res.sendFile(__dirname + '/public/function.html');

	})


})




router.post('/register',function(req,res){
var username=req.body.username;
var password =req.body.password;

var newuser = new User();
newuser.username= username;
newuser.password= password;
newuser.save(function(err,savedUser){
if(err){
console.log(err);
return res.status(500).send();

}

return res.status(200).send();



})



})




*/


//app.use('/create', routes);

app.get('/images', function(req, res) {
	//calling the function from index.js class using routes object..
	routes.getImages(function(err, genres) {
	if (err) {
	throw err;
	 
	}
	res.json(genres);
	 
	});
	});
	 
	// URL : http://localhost:3000/images/(give you collectionID)
	// To get the single image/File using id from the MongoDB
	app.get('/images/:id', function(req, res) {
	 
	//calling the function from index.js class using routes object..
	routes.getImageById(req.params.id, function(err, genres) {
	if (err) {
	throw err;
	}
	//res.download(genres.path);
	res.send(genres.path)
	});
	});
/*
var users = new Array(
	{name: 'developer', password: 'developer'},
	{name: 'guest', password: 'guest'}
);
*/
//app.set('view engine','ejs');





/*app.get('/',function(req,res){
	//res.sendFile(__dirname + '/public/index.html');


console.log(req.session);
	if (!req.session.authenticated) {
		res.redirect('/function');
	} else {
		res.status(200);
		res.render('secrets',{name:req.session.username});
	}
});

app.get('/login',function(req,res) {
	res.sendFile(__dirname + '/public/login.html');
});

app.post('/login',function(req,res) {
	for (var i=0; i<users.length; i++) {
		if (users[i].name == req.body.name &&
		    users[i].password == req.body.password) {
			req.session.authenticated = true;
			req.session.username = users[i].name;
		}
	}
	res.redirect('/');
});

app.get('/logout',function(req,res) {
	req.session = null;
	res.redirect('/');
});

*/

app.get('/create',function(req,res){
	res.sendFile(__dirname + '/views/create.html');
	


});


	

app.post('/createRestaurant',function(req,res){
	//var enoughData = true;
	var restID = 0;
	var data = {address:
{
		street:"",
		zipcode:"",
		building:"",	
	}
	,
	borough:"",
	cuisine:"",
	lon:"",
	lat:"",
	name:"",
	image:"",
	rate:""
		
		
		
};


	//app.use(fileUpload());
	

	data.address.street= req.body.street;
	data.address.zipcode= req.body.zipcode;
	data.address.building= req.body.building;
	data.borough= req.body.borough;
	data.cuisine= req.body.cuisine;
	data.name= req.body.name;
	data.lon=req.body.lon;
	data.lat=req.body.lat;
	data.image=req.body.image;


	/*var parsedURL = url.parse(req.url,true);
	
	if (parsedURL.pathname == '/createRestaurant' && 
		req.method.toLowerCase() == "post") {
	
	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
	var filename = files.filetoupload.path;
	console.log("filename = " + filename);
	fs.readFile(filename, function(err,data) {
	var base64 = new Buffer(data).toString('base64');
	})
}
	)}

	*/

/*	app.post("/", upload.single("file"), function(req, res, next){
		//create a gridfs-stream into which we pipe multer's temporary file saved in uploads. After which we delete multer's temp file.
		var writestream = gfs.createWriteStream({
		  filename: req.file.originalname
		});
		//
		// //pipe multer's temp file /uploads/filename into the stream we created above. On end deletes the temporary file.
		fs.createReadStream("./uploads/" + req.file.filename)
		  .on("end", function(){fs.unlink("./uploads/"+ req.file.filename, function(err){res.send("success")})})
			.on("err", function(){res.send("Error uploading image")})
			  .pipe(writestream);
	  });
	  app.get("/:filename", function(req, res){
		var readstream = gfs.createReadStream({filename: req.params.filename});
		readstream.on("error", function(err){
		  res.send("No image found with that title");
		});
		readstream.pipe(res);
	});
*/	
//	var parsedURL = url.parse(req.url,true);
	
/*	
	  var form = new formidable.IncomingForm();
	  form.parse(req, function (err, fields, files) {
		var filename = image.filetoupload.path;
		console.log("filename = " + filename);
		
	  });
	*/

	
	if(false){
		
			}else{
		
		
			mongoose.connect(mongodburl);
			
			var db = mongoose.connection;
			db.on('error',console.error.bind(console,'connection 	error:'));
			db.once('open',function(callback,restID){
				var Restaurant = mongoose.model('restaurant',restSchema);
				var r = new Restaurant(data);
					r.save(function(err,restID){
						res.write('<html><body>');
						if(err){
							res.write('<p>'+err.message+'</p>');
						}else{
							res.write('<h1>Create Succeed</h1>');
							console.log('Created:',r._id);
						}
					res.write('<br />'+restID+'<br /><a href="/function">Go Home</a></		body></html>');
					res.end();
					db.close();
					});
			});
		}
		});
app.get('/rated',function(req,res) {
	
	res.sendFile(__dirname + '/public/rated.html');
});


app.post('/rated',function(req,res){
	var rate = req.body.rate;

	res.send(rate);



});


app.get('/show', function(req,res) {
	res.sendFile(__dirname + '/views/searchRest.html');  // serve static files
});

app.get('/searchRest',function(req,res) {
	
	mongoose.connect(mongodburl);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		var Rest = mongoose.model('restaurant', restSchema);
		var criteria = {address:
{
		street:"",
		zipcode:"",
		building:"",	
	}
	,
	borough:"",
	cuisine:"",
	name:"",
};
		if (req.query.name) {criteria.name = req.query.name;}
		if (req.query.street)  {criteria.address.street = req.query.street;}
		if (req.query.zipcode) {criteria.address.zipcode = req.query.zipcode;}
		if (req.query.building) {criteria.address.building = req.query.building;}
		if (req.query.borough) {criteria.borough = req.query.borough;}
		if (req.query.cuisine) {criteria.cuisine = req.query.cuisine;}
		Rest.find(criteria, function(err,results) {
			if (err) {
				console.log("Error: " + err.message);
				res.write(err.message);
			}
			else {
				console.log('Found: ',results.length);
				res.render('showRest',{rests: results});
			}
			res.end();
			db.close();
		});
	});
});

app.get('/showAll',function(req,res){
	mongoose.connect(mongodburl);
	var db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error:'));
	db.once('open',function(callback){
		var Rest = mongoose.model('restaurant',restSchema);
		Rest.find(function(err,results){
				if(err){
					console.log("Error: "+err.message);
					res.write(err.message);
				}else{
					console.log('Found',results.length);

					res.render('dataList',{rests:results});
				}
				res.end();
				db.close();
			});
	});	
});

app.get('/delete',function(req,res){
	mongoose.connect(mongodburl);
	var db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error:'));
	db.once('open',function(callback){
		var Rest = mongoose.model('restaurant',restSchema);
		Rest.find(function(err,results){
				if(err){
					console.log("Error: "+err.message);
					res.write(err.message);
				}else{
					console.log('Found',results.length);
					res.render('showAllData',{rests:results});
				}
				res.end();
				db.close();
			});
	});	
});



app.get('/deleteAllData',function(req,res){
	mongoose.connect(mongodburl);
	
	var db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error:'));
	console.log("i am here");	
	
	db.once('open',function(callback){
		var Rest = mongoose.model('restaurant',restSchema);
		console.log("step 1~~~~");	
		Rest.remove(function(err){
			if(!err){
					console.log("removed");
					res.write('<html><body>');
					res.write('<h1>Removed</h1>');
					res.write('<br /><a href="/delete">Go back</a></body></html>');
					res.end();
				}else{
					console.log(err);
				}db.close();
		
		});
		
	});
});

app.get('/deleteData/:id',function(req,res){
		mongoose.connect(mongodburl);
		console.log("ID: "+req.params.id);
	
		var db = mongoose.connection;
		db.on('error',console.error.bind(console,'connection error:'));

		db.once('open',function(callback){
			var Rest = mongoose.model('restaurant',restSchema);
			Rest.findOne({_id:req.params.id},function(err,result){
				if(err){
					console.log(err);
				}else{
					result.remove(function(err){
						if(err) console.log(err);
						else{
							console.log("removed");
						res.write('<html><body>');
						res.write('<h1>Removed</h1>');
						res.write('<br /><a href="/delete">Go back</a></body></html>');
						res.end();
						}db.close();
					});
				}
			});
						
		});
});



app.get('/update', function(req,res) {

	mongoose.connect(mongodburl);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		var Rest = mongoose.model('restaurant', restSchema);
		var criteria = {};
		Rest.find(function(err,results) {
			if (err) {
				console.log("Error: " + err.message);
				res.write(err.message);
			}
			else {
				console.log('Found: ',results.length);
				res.render('updateList',{rests: results});
			}
			res.end();
			db.close();
		});
	});
});


app.get('/updateRest',function(req,res) {
	res.redirect('/updateRest/name/'+req.query.name);
});

app.get('/updateRest/name/:name', function(req,res) {
	var getname = req.params.name;
	res.render('updateRest',{gotname: getname});
});

app.get('/updated',function(req,res) {
	res.redirect('/updated/'+req.query.name+'/'+req.query.street+'/'+req.query.zipcode+'/'+req.query.building+'/'+req.query.borough+'/'+req.query.cuisine);
});

app.get('/updated/:name/:street/:zipcode/:building/:borough/:cuisine', function(req,res) {
		console.log("street:" +req.params.street);
	
	mongoose.connect(mongodburl);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {	
		var Rest = mongoose.model('restaurant', restSchema);		
		var data = {address:
{
		street:"",
		zipcode:"",
		building:"",	
	}
	,
	borough:"",
	cuisine:"",
	name:"",
	restaurant_id:0
};	
		
		if (req.params.name) {data.name = req.params.name}
		if (req.params.street)  {data.address.street = req.params.street}
		if (req.params.zipcode)  {data.address.zipcode = req.params.zipcode}
		if (req.params.building)  {data.address.building = req.params.building}
		if (req.params.borough)  {data.borough = req.params.borough}
		if (req.params.cuisine)  {data.cuisine = req.params.cuisine}
		Rest.update({name:req.params.name},
		   {$set:data}, function(err,results) {
			res.write('<html><body>');
			if (err) {
				res.write('<p>'+err.message+'</p>');
			}
			else {
				res.write('<h1>Update Succeed</h1>');
				console.log('Updated');
			}
			res.write('<br><a href="/function">Go Home</a></body></html>');
			res.end();
			db.close();
		});
	});

});


	
app.listen(process.env.PORT||8099);
