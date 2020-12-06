const fs = require('fs');
const fsPromises = fs.promises;
const inquirer = require('inquirer');

async function main() {
	const result = await inquirer.prompt([{
		type: 'input',
		name: 'challengeNumber',
		message: 'What AoC number would you like to run?'
	}]);
	const {challengeNumber} = result;
	let file = await fsPromises.readFile(`day${challengeNumber}.txt`, 'utf8');

	let {part1, part2} = require(`./day${challengeNumber}`);
	const input = file.split('\r\n');
	await part1(input);
	await part2(input);
}

main();