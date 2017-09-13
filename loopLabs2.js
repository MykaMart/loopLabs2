// 1.

for (i = 50; i >= 20; i--) {
	if (i%3 === 0) {
		console.log(i);
	};
};

// 2.

for (i = 2; i >=1; i++) {
	console.log(i);
}

// 3.

const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for (i = 0; i <= classmates.length; i += 2) {
	console.log(classmates[i])
}

// 4.

const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const gfFreeMenu = []

for (let i = 0; i < menu.length; i++) {
	if (menu[i].glutenFree === true) {
		gfFreeMenu.push(menu[i]);
	 };
};

console.log(gfFreeMenu)

// Bonus Problem still working on it

const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, 
{name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},
{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}];

const goats = []

for (let i = 0; i < league.length; i++) {
	
	for (let a =0; a < league[i].players.length; a++){
		const pull = league[i].players[a]

		if (pull.goat === true){
			goats.push(league[i].players[a]);
		}

		}
};
console.log(goats);




