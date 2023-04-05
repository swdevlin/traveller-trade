export const Goods = [
  {
		name: 'Common Electronics',
		price: 20000,
		tons: {dice: 2, multiplier: 10},
		pdm: {In: 2, Ht: 3, Ri: 1},
		sdm: {Ni: 2, Lt: 1, Po: 1},
		availability: [],
		techSensitive: true,
	},
  {
		name: 'Common Industrial Goods',
		price: 10000,
		tons: {dice: 2, multiplier: 10},
		pdm: {Na: 2, In: 5},
		sdm: {Ni: 3, Ag: 2},
		availability: [],
		techSensitive: true,
	},
  {
		name: 'Common Manufactured Goods',
		price: 20000,
		tons: {dice: 2, multiplier: 10},
		pdm: {Na: 2, In: 5},
		sdm: {Ni: 3, Hi: 2},
		availability: [],
		techSensitive: true,
	},
  {
		name: 'Common Raw Materials',
		price: 5000,
		tons: {dice: 2, multiplier: 20},
		pdm: {Ag: 3, Ga: 2},
		sdm: {In: 2, Po: 2},
		availability: [],
		techSensitive: false,
	},
  {
		name: 'Common Consumables',
		price: 500,
		tons: {dice: 2, multiplier: 20},
		pdm: {Ag: 3, Wa: 2, Ga: 1, As: -4},
		sdm: {As: 1, Fl: 1, Ic: 1, Hi: 1},
		availability: [],
		techSensitive: false,
	},
  {
		name: 'Common Ore',
		price: 1000,
		tons: {dice: 2, multiplier: 20},
		pdm: {As: 4},
		sdm: {In: 3, Ni: 1},
		availability: [],
		techSensitive: false,
	},
  {
		name: 'Advanced Electronics',
		price: 100000,
		tons: {dice: 1, multiplier: 5},
		pdm: {In: 2, Ht: 3},
		sdm: {Ni: 1, Ri: 2, As: 3},
		availability: ['In', 'Ht'],
		techSensitive: true,
	},
  {
		name: 'Advanced Machine Parts',
		price: 75000,
		tons: {dice: 1, multiplier: 5},
		pdm: {In: 2, Ht: 1},
		sdm: {As: 2, Ni: 1},
		availability: ['In', 'Ht'],
		techSensitive: true,
	},
  {
		name: 'Advanced Manufactured Goods',
		price: 100000,
		tons: {dice: 1, multiplier: 5},
		pdm: {In: 1},
		sdm: {Hi: 1, Ri: 2},
		availability: ['In', 'Ht'],
		techSensitive: true,
	},
  {
		name: 'Advanced Weapons',
		price: 150000,
		tons: {dice: 1, multiplier: 5},
		pdm: {Ht: 2},
		sdm: {Po: 1, Az: 2, Rz: 4},
		availability: ['In', 'Ht'],
		techSensitive: true,
	},
  {
		name: 'Advanced Vehicles',
		price: 180000,
		tons: {dice: 1, multiplier: 5},
		pdm: {Ht: 2},
		sdm: {As: 2, Ri: 2},
		availability: ['In', 'Ht'],
		techSensitive: true,
	},
  {
		name: 'Biochemicals',
		price: 50000,
		tons: {dice: 1, multiplier: 5},
		pdm: {Ag: 1, Wa: 1},
		sdm: {In: 2},
		availability: ['Ag', 'Wa'],
		techSensitive: true,
	},
  {
		name: 'Crystals & Gems',
		price: 20000,
		tons: {dice: 1, multiplier: 5},
		pdm: {As: 2, De: 1, Ic: 1},
		sdm: {In: 3, Ri: 2},
		availability: ['As', 'De', 'Ic'],
		techSensitive: false,
	},
  {
		name: 'Cybernetics',
		price: 250000,
		tons: {dice: 1, multiplier: 1},
		pdm: {Ht: 1},
		sdm: {As: 1, Ic: 1, Ri: 2},
		availability: ['Ht'],
		techSensitive: true,
	},
  {
		name: 'Live Animals',
		price: 10000,
		tons: {dice: 1, multiplier: 10},
		pdm: {Ag: 2},
		sdm: {Lo: 3},
		availability: ['Ag', 'Ga'],
		techSensitive: false,
	},
  {
		name: 'Luxury Consumables',
		price: 20000,
		tons: {dice: 1, multiplier: 10},
		pdm: {Ag: 2, Wa: 1},
		sdm: {Ri: 2, Hi: 2},
		availability: ['Ag', 'Ga', 'Wa'],
		techSensitive: false,
	},
  {
		name: 'Luxury Goods',
		price: 200000,
		tons: {dice: 1, multiplier: 1},
		pdm: {Hi: 1},
		sdm: {Ri: 4},
		availability: ['Hi'],
		techSensitive: true,
	},
  {
		name: 'Medical Supplies',
		price: 50000,
		tons: {dice: 1, multiplier: 5},
		pdm: {Ht: 2},
		sdm: {In: 2, Po: 1, Ri: 1},
		availability: ['Hi', 'Ht'],
		techSensitive: true,
	},
  {
		name: 'Petrochemicals',
		price: 10000,
		tons: {dice: 1, multiplier: 10},
		pdm: {De: 2},
		sdm: {In: 2, Ag: 1, Lt: 2},
		availability: ['De', 'Fl', 'Ic', 'Wa'],
		techSensitive: false,
	},
  {
		name: 'Pharmaceuticals',
		price: 100000,
		tons: {dice: 1, multiplier: 1},
		pdm: {As: 2, Hi: 1},
		sdm: {Ri: 2, Lt: 1},
		availability: ['As', 'De', 'Hi', 'Wa'],
		techSensitive: true,
	},
  {
		name: 'Polymers',
		price: 7000,
		tons: {dice: 1, multiplier: 10},
		pdm: {In: 1},
		sdm: {Ri: 2, Ni: 1},
		availability: ['In'],
		techSensitive: true,
	},
  {
		name: 'Precious Metals',
		price: 50000,
		tons: {dice: 1, multiplier: 1},
		pdm: {As: 3, De: 1, Ic: 2},
		sdm: {Ri: 2, In: 2, Ht: 1},
		availability: ['As', 'De', 'Ic', 'Fl'],
		techSensitive: false,
	},
  {
		name: 'Radioactives',
		price: 1000000,
		tons: {dice: 1, multiplier: 1},
		pdm: {As: 2, Lo: 2},
		sdm: {In:3, Ht: 1, Ni: -2, Ag: -3},
		availability: ['As', 'De', 'Lo'],
		techSensitive: false,
	},
  {
		name: 'Robots',
		price: 400000,
		tons: {dice: 1, multiplier: 5},
		pdm: {In: 1},
		sdm: {Ag: 2, Ht: 1},
		availability: ['In'],
		techSensitive: true,
	},
  {
		name: 'Spices',
		price: 6000,
		tons: {dice: 1, multiplier: 10},
		pdm: {De: 2},
		sdm: {Hi: 2, Ri: 3, Po: 3},
		availability: ['Ga', 'De', 'Wa'],
		techSensitive: false,
	},
  {
		name: 'Textiles',
		price: 3000,
		tons: {dice: 1, multiplier: 20},
		pdm: {Ag: 7},
		sdm: {Hi: 3, Na: 2},
		availability: ['Ag', 'Ni'],
		techSensitive: false,
	},
  {
		name: 'Uncommon Ore',
		price: 5000,
		tons: {dice: 1, multiplier: 20},
		pdm: {As: 4},
		sdm: {In: 3, Ni: 1},
		availability: ['As', 'Ic'],
		techSensitive: false,
	},
  {
		name: 'Uncommon Raw Materials',
		price: 20000,
		tons: {dice: 1, multiplier: 10},
		pdm: {Ag: 2, Wa: 1},
		sdm: {In: 2, Ht: 1},
		availability: ['Ag', 'De', 'Wa'],
		techSensitive: false,
	},
  {
		name: 'Wood',
		price: 1000,
		tons: {dice: 1, multiplier: 20},
		pdm: {Ag: 6},
		sdm: {Ri: 2, In: 1},
		availability: ['Ag', 'Ga'],
		techSensitive: false,
	},
  {
		name: 'Vehicles',
		price: 15000,
		tons: {dice: 1, multiplier: 10},
		pdm: {In:2, Ht: 1},
		sdm: {Ni: 2, Hi: 1},
		availability: ['In', 'Ht'],
		techSensitive: true,
	},
];

export const getAvailableGoods = (tradeCodes) => {
	return Goods.filter(g => {
		if (g.availability.length === 0)
			return true;

		for (const c of g.availability)
			if (tradeCodes.includes(c))
				return true;
		return false;
	});
}

export const purchaseDM = (good, tradeCodes) => {
	let dm = 0;
	for (const c of tradeCodes)
		if (good.pdm[c])
			dm = Math.max(dm, good.pdm[c]);

	let negativeDm = 0
	for (const c of tradeCodes)
		if (good.sdm[c])
			dm = Math.min(negativeDm, -1*good.sdm[c]);

	return dm+negativeDm;
}

export const saleDM = (good, tradeCodes) => {
	let dm = 0;
	for (const c of tradeCodes)
		if (good.sdm[c])
			dm += good.sdm[c];

	let negativeDm = 0
	for (const c of tradeCodes)
		if (good.pdm[c])
			dm -= good.pdm[c];

	return dm+negativeDm;
}

export const maxTons = (good, lotSize, pop) => {
	let popDM = 0;
	if (pop <= 3)
		popDM = -3;
	else if (pop >= 9)
		popDM = 3;
	if (lotSize === '1')
		return 1;
	else if (lotSize === 'min')
		return good.tons.dice * good.tons.multiplier;
	else if (lotSize === 'avg')
		return Math.max(3.5 * good.tons.dice + popDM, 0) * good.tons.multiplier;
	else if (lotSize === 'max')
		return (6 * good.tons.dice + popDM) * good.tons.multiplier;
}
