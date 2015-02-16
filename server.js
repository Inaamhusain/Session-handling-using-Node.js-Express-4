var app   = require('express')();
var http = require('http').Server(app);
var session = require('express-session');
var express   = require('express');
app.use(session({
	secret: 'test session',
	resave: false,
	saveUninitialized: true
}));

app.get('/setsession',function(req,res){
	sess=req.session;
	sess.sessdata = {};
	sess.sessdata.email= "inaam";
	sess.sessdata.pass= "inaam1234";
	var data = {
		"Data":""
	};
	data["Data"] = 'Session set';
	res.json(data);
});

app.get('/destroysession',function(req,res){
	sess=req.session;
	var data = {
		"Data":""
	};
	sess.destroy(function(err) {
		if(err){
			data["Data"] = 'Error destroying session';
			res.json(data);
		}else{
			data["Data"] = 'Session destroy successfully';
			res.json(data);
		}
	});
});

app.get('/showallsession',function(req,res){
	sess=req.session;
	var data = {
		"Data":""
	};
	data["Data"] = sess.sessdata;
	res.json(data);
});

app.get('/reloadsession',function(req,res){
	sess=req.session;
	var data = {
		"Data":""
	};
	sess.reload(function(err) {
		if(err){
			data["Data"] = 'Error Reloading session';
			res.json(data);
		}else{
			data["Data"] = 'Session Reloaded successfully';
			res.json(data);
		}
	})
});

app.get('/savesession',function(req,res){
	sess=req.session;
	var data = {
		"Data":""
	};
	sess.save(function(err) {
		if(err){
			data["Data"] = 'Error saving session';
			res.json(data);
		}else{
			data["Data"] = 'Session saved successfully';
			res.json(data);
		}
	})
});

http.listen(8080,function(){
	console.log("Connected");
});