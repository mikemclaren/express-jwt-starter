'use strict';
var index, auth;

index = require('./index');
auth = require('./auth');

module.exports = function routes(app) {
	app.get('/', index);
	app.post('/auth', auth);
};
