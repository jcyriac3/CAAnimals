//Final Animals JS File
function getanimal() {
		let choice = document.getElementById("animal-select");		
		let animal = JSON.parse(findanimal(choice.selectedIndex));
		//Sets the description next to the dropbox
		if (animal === null)
			document.getElementById("animal").value = "";
		else
			document.getElementById("animal").value = `${animal.name}s typically remain on ${animal.env}. Their average life expectancy is ${animal.life}. And a fun fact is that they ${animal.fact}!`;
}


// Uses the selection number to return a JSON obj of the correct animal
function findanimal(id) {
	switch (id) {
	case 0:
		return null;
	case 1:
		return '{ "name":"Dog", "env": "land", "life": "between 10-13 years", "fact": "are the most owned pet in the U.S."}';
	case 2:
		return '{ "name":"Cat", "env": "land", "life": "between 13-17 years", "fact": "possess hearing at least 5 times as good as an adult human"}';
	case 3:
		return '{ "name":"Hamster", "env": "land", "life": "between 2-3 years", "fact": "have teeth that grow continuously"}';
	case 4:
		return '{ "name":"Pigeon", "env": "land", "life": "6 years", "fact": "can fly at the speed of 50-60 mph"}';
	case 5:
		return '{ "name":"Squid", "env": "ocean", "life": "between 3-5 years", "fact": "have 8 arms and 3 hearts"}';
	case 6:
		return '{ "name":"Frog", "env": "both land and water", "life": "between 10-12 years", "fact": "absorb water through their skin so they never need to drink"}';
	case 7:
		return '{ "name":"Lion", "env": "land", "life": "between 10-14 years", "fact": "are the only cats that live in groups"}';
	case 8:
		return '{ "name":"Chicken", "env": "land", "life": "between 10-12 years", "fact": "can remember over 100 different faces of people or animals"}';
	case 9:
		return '{ "name":"Shark", "env": "water", "life": "between 20-30 years", "fact": "have skin which feels exactly like sandpaper"}';
	case 10:
		return '{ "name":"Giraffe", "env": "land", "life": "25 years", "fact": "are the tallest mammals on Earth"}';
	
	}

}