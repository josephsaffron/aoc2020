const fs = require('fs');
const fsPromises = fs.promises;

async function part1() {
	let dict = {};
	let file = await fsPromises.readFile('input.txt', 'utf8');
	dict = Object.assign({}, ...file.split('\r\n').map(x => ({[x]: parseInt(x)})));
	for (let prop in dict) {
		const balance = 2020 - parseInt(prop);
		if (dict[`${balance}`]){
			console.log(parseInt(dict[`${balance}`]) * parseInt(prop));
			return;
		}
	}

}

async function part2() {
	let dict = {};
	let file = await fsPromises.readFile('input.txt', 'utf8');
	dict = Object.assign({}, ...file.split('\r\n').map(x => ({[x]: parseInt(x)})));
	for (let prop in dict) {
		const balance = 2020 - parseInt(prop);
		for (let subprop in dict){
			const subbalance = balance - parseInt(subprop);
			if (dict[`${subbalance}`]){
				console.log(parseInt(dict[`${subbalance}`]) * parseInt(prop) * parseInt(subprop));
				return;
			}
		}
	}

}

part2();
part1();