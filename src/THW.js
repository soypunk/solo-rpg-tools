import Utils from './utils.js'

const utils = new Utils()

export default class THW {
	constructor(){
		this._planet_class_descriptors = {
			1: "largest"
			2: "medium-sized"
			3: "smallest"
		}
	}
	
	get planet_class_descriptors() {
		return this._planet_class_descriptors
	}
	
	planet_class_descriptor(planet_class) {
		return this.planet_class_descriptors[planet_class]
	}	
	
	who_are_they(planet_class=1) {
		let roll1 = utils.rollDice(2, 6)
		let roll2 = utils.rollDice(1, 6)
		
		let professions = {
			1: {
				2: {
					"profession":"Mover",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				3: {
					"profession":"Mover",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				4: {
					"profession":"Shaker",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				5: {
					"profession":"Shaker",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				6: {
					"profession":"Exotic",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				7: {
					"profession":"Joe - Service",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				8: {
					"profession":"Joe - Service",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				9:  {
					"profession":"Joe - Labor",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Zhuh-Zhuh",
						5: "Zhuh-Zhuh",
						6: "Hishen"
					},
				10: {
					"profession":"Criminal Element",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				11: {
					"profession":"Criminal Element",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				12: {
					"profession":"Criminal Element",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					}
			},
			2:
			3:
		}
		
	}
	
	rep_generator(race) {
		let roll = utils.rollDice(1, 6)
		
		let reps = {
			"basic": {
				1: 3,
				2: 3,
				3: 3,
				4: 4,
				5: 4,
				6: 5
			},
			"grath": {
				1: 4,
				2: 4,
				3: 4,
				4: 4,
				5: 4,
				6: 4
			},
			"hishen": {
				1: 3,
				2: 3,
				3: 3,
				4: 4,
				5: 4,
				6: 3
			},
			"razor": {
				1: 4,
				2: 4,
				3: 4,
				4: 5,
				5: 5,
				6: 3
			},
			"xeog": {
				1: 4,
				2: 4,
				3: 4,
				4: 5,
				5: 5,
				6: 3
			},
			"zhuh-zhuh": {
				1: 4,
				2: 4,
				3: 4,
				4: 3,
				5: 3,
				6: 5
			}
		}
		
		return reps[race][roll.total]
	}
	
	where_are_you(ring=1) {
		
		if (ring < 1 && ring > 9) { ring = 1 }
	
		let owner_roll = utils.rollDice(1, 6)
		let class_roll = utils.rollDice(1, 3)
		let law_level_roll = utils.rollDice(1, 6)
		
		let ring_1_3 = {
			1: "Gaea Prime",
			2: "Gaea Prime",
			3: "Gaea Prime",
			4: "Independent",
			5: "Zhuh-Zhuh",
			6: "Zhuh-Zhuh"
		}
		let ring_4_6 = {
			1: "Independent",
			2: "Hishen",
			3: "Hishen",
			4: "Hishen",
			5: "Xeog",
			6: "Zhuh-Zhuh"
		}		
		let ring_7_9 = {
			1: "Independent",
			2: "Independent",
			3: "Hishen",
			4: "Razor",
			5: "Xeog",
			6: "Zhuh-Zhuh"
		}
		
		let rings = {
			1: ring_1_3,
			2: ring_1_3,
			3: ring_1_3,
			4: ring_4_6,
			5: ring_4_6,
			6: ring_4_6,
			7: ring_7_9,
			8: ring_7_9,
			9: ring_7_9
		}
		
		let owner = rings[ring][owner_roll.total]		
		let planet_class = class_roll.total
		let law_level = (law_level_roll.total - planet_class)
		
		if (law_level < 1) { law_level = 1 }
		
		return {
			"owner": owner,
			"class": planet_class,
			"class_descriptor": this.planet_class_descriptor(planet_class),
			"law_level": law_level
		}
	}
	
	how_many_of_them(band_size=1) {
		let rolls = utils.rollDice(2, 3)
		
		let how_many = (rolls.diceRolls[0]+band_size) - (rolls.diceRolls[1])
		
		if (how_many < 1) { how_many = 1 }
		
		return how_many
	}
	
	packing() {
	}
	
	pefs() {
	
	}
	
	challenge() {
	}
	
	involuntary_encounter() {
	}
	
	chillin() {
	}
	
	gamble() {
	}
	
	deal() {
	}
	
	confrontation() {
	}
	
	contact_in_space() {
	}
	
	defend() {
	}
	
	escort() {
	}
	
	find() {
	}
	
	hauling_cargo() {
	}
	
	hauling_passengers() {
	}
	
	job_offer() {
	}
	
	piracy() {
	}
	
	questioning_and_arrest() {
	}
	
	raid() {
	}
	
	robbery() {
	}
	
	salvage() {
	}
	
	
}
