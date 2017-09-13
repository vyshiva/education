var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

app.use('/public', express.static('public'));
    
app.use('/findToy', (req, res) => {
  	if ( req.query.id ) {
		Toy.findOne( {id: req.query.id}, (err, toy) => {
			if (err) res.json({});
			else if ( !toy )res.json({});
			else res.json(toy);
		});
	}
	else res.json({});    
});

app.use('/findAnimals', (req, res) => {
	var query ={};
	if (req.query.species) query.species = req.query.species;
	if (req.query.trait) query.traits = req.query.trait;
	if (req.query.gender) query.gender = req.query.gender;
	var anims =	{};
	var arr = [];
	if (Object.keys(query).length != 0){
		Animal.find(query, (err, animals) => {
			if (err)
				res.json({});
			else if (!animals )
				res.json({});
			else {
				anims = {};
				arr = [];
				animals.forEach((animal) => {
						anims.name = animal.name;
						anims.species = animal.species;
						anims.breed = animal.breed;
						anims.gender = animal.gender;
						anims.age = animal.age;
						arr.push(anims);	
						anims = {};
				});
				res.json(arr);
			}
		});
	}
	else 
		res.json({});
});

app.use('/animalsYoungerThan', (req, res) => {
    var ob ={};
	var ageMax = Number(req.query.age);
	if (!ageMax || ageMax == NaN) 
		res.json({});
	else {
		var query = {age: {$lt: ageMax} };	
		Animal.find( query, (err, animals) => {
			if (err)
				res.json({});
			else {
                ob.count = animals.length;
                if (ob.count == 0) res.json({count:0})
                else {
                   ob.names = [];
				    animals.forEach( ( animal ) => {
					    ob.names.push(animal.name);
				    });
				    res.json(ob);
                    ob = {}; 
                }
			};	
		});
	}
});

app.use('/calculatePrice', (req, res) => {
/*	var str = req._parsedUrl.query;
	var arr = str.split('&');
	var x =''; var y = ''; var z = ''; var val;
	var newArr = [];
	arr.forEach((one) => {
		x = one.indexOf('[') + 1;
		y = one.indexOf(']');
		z = Number(one.substr(x, y-x));
		if (!newArr[z]) newArr[z] = {id:'',qty:0};
		x = one.indexOf('=')+1;
		val = one.substr(x);
		if (one.charAt(0) == 'i'){
			if (newArr[z].id) console.log('Err'); else newArr[z].id = val;
		}
		else if(one.charAt(0) == 'q'){
			if (newArr[z].id) newArr[z].qty += Number(val); else newArr[z].qty = Number(val);
		}
	});
*/
	var ids = req.query.id;
	var qtys = req.query.qty;
	if ( !ids || !qtys )
		res.json({});
	else if(ids.length != qtys.length)
		res.json({});
	else {
		var idsNew = [];
		var qtyNew = [];
		var newArr = [];
		for (var i=0;i<ids.length;i++){
			if (qtys[i] >= 1 && qtys[i] != NaN){
				var j = idsNew.indexOf(ids[i]);
				if (idsNew.indexOf(ids[i]) == -1){
					idsNew.push(ids[i]);
					qtyNew.push(Number(qtys[i]));
				} 
				else {
					qtyNew[j] += Number(qtys[i]);
				}
			}
		}; 
		var objPrice = {totalPrice:0, items:[]};
		var total = 0;
		var items =[];
		Toy.find({id: {$in: idsNew}}, (err, toys) => {
			var ob = {};
			for(var i=0;i< toys.length;i++) {
				var j = idsNew.indexOf(toys[i].id);
				ob.item = toys[i].id;
				ob.qty = qtyNew[j];
				ob.subtotal = toys[i].price * ob.qty;
				items.push(ob);
				total += ob.subtotal;
				ob = {};
			};
			res.json({totalPrice: total, items: items});	
		});
	}
});

app.use('/createToy', (req, res) => {
	console.log(req.body);
	var newToy = new Toy ({
		id: req.body.id,
		name: req.body.name,
		price: req.body.price
	});
	newToy.save ( (err) => {
		if (err){
			res.type('html').status(500);
			res.send('Error: ' + err);
		}
		else{
			res.render('createdToy', {toy: newToy});
		}
	});
});


app.use('/createAnimal', (req, res) => {
	console.log(req.body);
	var newAnimal = new Animal({
		name: req.body.name,
		species: req.body.species,
		breed: req.body.breed,
		traits: [req.body.trait1, req.body.trait2],
		gender: [req.body.gender],
		age: req.body.age
	});
	newAnimal.save( (err) => {
		if (err) {
			res.type('html').status(500);
			res.send('Error: ' + err);
		}
		else {
			res.type('html').status(200);
			res.send('Created!');
		}
	});
});


app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;