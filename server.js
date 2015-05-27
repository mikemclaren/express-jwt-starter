'use strict';
var express, logger, expressBunyanLogger, bodyParser, app, jwt, server, config,
routes;

express = require('express');
logger = require('./utils/logger')('Server', true);
expressBunyanLogger = require('express-bunyan-logger');
bodyParser = require('body-parser');
jwt = require('express-jwt');
config = require('./config');

routes = require('./app/routes');

app = module.exports = express();

// Some much needed middleware.
app.use(expressBunyanLogger.errorLogger());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Uses express-jwt. CHANGE THE SECRET.
app.use(
	jwt({ secret: config.JWT_SECRET })
	.unless({
		path: [
			'/auth'
		]
	})
);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
		res.status(401).send({error: 'Please authenticate first.'})
  }
});

routes(app);

app.set('port', config.PORT);

// Start up and initialize the server.
server = app.listen(app.get('port'), function serverListen() {
	logger.info('Server started and listening on port ' + server.address().port);
});
