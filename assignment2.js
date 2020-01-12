const express = require('express');
const app = express();
//const router = express.Router();
const mongo = require('mongodb');

const port = process.env.PORT || 3000;

//Need to connect to MongoDB
//app.use('/', routes);

//Data is hardcoded but will later be referred using the database
const animals = [
{ "id": 1,
"name":"Dog",
"env": "land", 
"life": "between 10-13 years", 
"fact": "are the most owned pet in the U.S."},
{ "id": 2,
"name":"Cat", 
"env": "land", 
"life": "between 13-17 years", 
"fact": "possess hearing at least 5 times as good as an adult human"},
{ "id": 3,
"name":"Hamster", 
"env": "land", 
"life": "between 2-3 years", 
"fact": "have teeth that grow continuously"},
{ "id": 4,
"name":"Pigeon", 
"env": "land", 
"life": "6 years", 
"fact": "can fly at the speed of 50-60 mph"},
{ "id": 5,
"name":"Squid", 
"env": "ocean", 
"life": "between 3-5 years", 
"fact": "have 8 arms and 3 hearts"},
{ "id": 6,
"name":"Frog", 
"env": "both land and water", 
"life": "between 10-12 years", 
"fact": "absorb water through their skin so they never need to drink"},
{ "id": 7,
"name":"Lion", 
"env": "land",
"life": "between 10-14 years", 
"fact": "are the only cats that live in groups"},
{ "id": 8,
"name":"Chicken", 
"env": "land", 
"life": "between 10-12 years", 
"fact": "can remember over 100 different faces of people or animals"},
{ "id": 9,
"name":"Shark", 
"env": "water", 
"life": "between 20-30 years", 
"fact": "have skin which feels exactly like sandpaper"},
{ "id": 10,
"name":"Giraffe", 
"env": "land", 
"life": "25 years", 
"fact": "are the tallest mammals on Earth"}
];

//Gets all the animals in the database
app.get('/', (req,res) => {
	res.send(animals);
});

/*Gets each individual animal from the database
	Returns the animal with the given ID from 1-10, else
	an error message will be sent back.
*/
app.get('/:id', (req,res) => {
	const animal = animals.find(a => a.id === parseInt(req.params.id));
	//Returns 404 if id doesn't exist
	if (!animal) res.status(404).send('That animal id is outside of the values 1-10.');
	res.send(animal);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));