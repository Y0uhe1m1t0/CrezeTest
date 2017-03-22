var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var bookshelf = require('./bookshelf.js');
var dispensario = bookshelf.Model.extend({
	tableName: 'dispensario',
	idAttribute: 'idDispensario'
});
var dispensarios = bookshelf.Model.extend({
	tableName: 'dispensario',
	idAttribute: 'idDispensario',
	mangueras: function(){
		return this.hasMany(manguera, 'idDispensario', 'idDispensario');
	}
});
var manguera = bookshelf.Model.extend({
	tableName: 'manguera',
	idAttribute: 'idManguera'
});

app.get('/', function (req, res) {
  res.send('Examen Creze');
});

//Consulta de información 

app.get('/dispensarios', function(req, res){
	dispensarios.fetchAll()
	.then(function(collection){ 
		if(collection != null){
			res.send(collection.toJSON()); 
		}
		else{res.end();}
	});
});

app.get('/dispensarios/:id', function(req, res){
	dispensarios
	.where('idDispensario', req.params.id)
	.fetch({withRelated: ['mangueras']})
	.then(function(dispensario){ 
		if(dispensario != null){
			var mangueras = dispensario.related('mangueras');
			if(mangueras != null){
				res.send(mangueras.toJSON()); 
			}
			else{res.end();}
		}
		else{res.end();}
	});
});

app.get('/dispensarios/:id/:lado', function(req, res){
	dispensarios
	.where('idDispensario', req.params.id)
	.fetch({withRelated: ['mangueras']})
	.then(function(dispensario){
		if(dispensario != null){
			var mangueras = dispensario.related('mangueras');
			var results = [];
			if(mangueras != null){
				var aux = mangueras.toJSON();
				for(var i = 0; i < aux.length; i++){
					if(aux[i].lado == req.params.lado){
						results.push(aux[i]);
					}
				}
			}
			res.send(results);
		}
		else{res.end();}
	});
});


//Inserción de información

app.post('/dispensarios', function(req, res){
	new dispensario(
	{marca: req.body.marca, 
	modelo: req.body.modelo, 
	numSerie: req.body.serie, 
	numAprob: req.body.aprobacion })
	.save(null, {method: 'insert'})
	.then(function (dispensario) {
      res.json('Se ha insertado un nuevo registro.');
    })
    .catch(function (err) {
      res.send('No se logró insertar el registro.');
    });
});

//Actualización de información

app.put('/dispensarios/:id', function(req, res){
	dispensario
	.where('idDispensario', req.params.id)
	.fetch()
	.then(function(dispensario){
		if(dispensario != null){
			dispensario.save({marca: req.body.marca || dispensario.marca, 
			modelo: req.body.modelo || dispensario.modelo, 
			numSerie: req.body.serie || dispensario.serie, 
			numAprob: req.body.aprobacion || dispensario.aprobacion}, {method: 'update'})
			.then(function (dispensario) {
			  res.json('Se ha actualizado el registro.');
			})
			.catch(function (err) {
			  res.send('No se logró actualizar el registro.');
			});
		}
	})
	.catch(function (err) {
	  res.send('No se logró actualizar el registro.');
	});
});

//Borrado de información

app.delete('/dispensarios/:id', function(req, res){
	new dispensario({idDispensario: req.params.id}).destroy()
	.then(function (dispensario) {
      res.send('Se eliminó el registro de la base de datos.');
    })
    .catch(function (err) {
      res.send('No se logró eliminar el registro.');
    });
});

app.listen(3000, function () {
  console.log('Examen Creze escuchando a través del puerto 3000');
});