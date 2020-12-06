exports.part1 = async(input) => {
	let dict = {};
	dict = Object.assign({}, ...input.map(x => ({[x]: parseInt(x)})));
	for (let prop in dict) {
		const balance = 2020 - parseInt(prop);
		if (dict[`${balance}`]){
			console.log(parseInt(dict[`${balance}`]) * parseInt(prop));
			return;
		}
	}

}

exports.part2 = async(input) => {
	let dict = {};
	dict = Object.assign({}, ...input.map(x => ({[x]: parseInt(x)})));
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
