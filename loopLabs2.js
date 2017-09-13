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