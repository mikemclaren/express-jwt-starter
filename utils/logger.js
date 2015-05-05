'use strict';

var bunyan, log;
bunyan = require('bunyan');
log = bunyan.createLogger({
	name: 'appindex'
});

module.exports = function logger(logType, system) {
	return log.child({ type: logType, system: system });
};
