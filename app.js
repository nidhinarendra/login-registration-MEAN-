
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var session = require('client-sessions');

var app = express();
var login = require("./routes/login");

app.use(session({

	cookieName: 'session',
	secret: 'nidhi',
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,  }));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/checklogin', login.checkLogin);
app.post('/register', login.register);
app.get('/homepage',login.redirectToHomepage);
app.get('/logout',login.logout);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
