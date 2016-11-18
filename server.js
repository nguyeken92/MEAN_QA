var express = require('express'),
	app = express(),
	bp = require('body-parser'),
	path = require('path'),
	session = require('express-session');

app.use(session({
	secret: "<3",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));

app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
	console.log('listening to 8000')
})
