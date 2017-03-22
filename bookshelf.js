var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'gasolina',
		database: 'CrezeTest',
		charset: 'latin1'
	}
});

module.exports = require('bookshelf')(knex);