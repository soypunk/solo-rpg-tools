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
	
	who_are_they(planet_class=1,profession_result=none) {
		if (profession_result == none) {
			let roll1 = utils.rollDice(2, 6)
			profession_result = roll1.total	
		}
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
			2: {
				2: {
					"profession":"Mover",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Basic",
						6: "Zhuh-Zhuh"
					},
				3: {
					"profession":"Mover",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Basic",
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
					"profession":"Joe - Labor",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Zhuh-Zhuh",
						5: "Zhuh-Zhuh",
						6: "Hishen"
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
			3: {
			    2: {
					"profession":"Mover",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Basic",
						6: "Zhuh-Zhuh"
					},
				3: {
					"profession":"Shaker",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				4: {
					"profession":"Exotic",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				5: {
					"profession":"Exotic",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				6: {
					"profession":"Joe - Service",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Basic",
						5: "Xeog",
						6: "Zhuh-Zhuh"
					},
				7: {
					"profession":"Joe - Labor",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Zhuh-Zhuh",
						5: "Zhuh-Zhuh",
						6: "Hishen"
					},
				8: {
					"profession":"Joe - Labor",
					"species": {
						1: "Basic",
						2: "Basic",
						3: "Basic",
						4: "Zhuh-Zhuh",
						5: "Zhuh-Zhuh",
						6: "Hishen"
					},
				9:  {
					"profession":"Criminal Element",
					"species": {
						1: "Basic",
						2: "Grath",
						3: "Hishen",
						4: "Razor",
						5: "Xeog",
						6: "Zhuh-Zhuh"
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
			}
		}
		
		let result = professions[planet_class][profession_result]
		
		return {
			"profession": result.profession,
			"species": result.species[roll2.total]
		}		
	}
	
	leader_generator(planet_class) {
		let leader = this.who_are_they(planet_class)
		leader["rep"] = rep_generator(leader.species)
		return leader
	}
	
	rep_generator(species) {
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
		
		return reps[species][roll.total]
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
	
	pef(band_size=1, ring=1, planet_class=none) {
		
		let planet = {}		
		
		if (planet_class=none) {
			planet = where_are_you(ring)
			planet_class = planet.class
		} else {
			planet["class"] = planet_class
		}
		
		let how_many = this.how_many_of_them(band_size)
		let leader = this.leader_generator(planet_class)
		let leader_rep_max_roll = utils.rollDice(1, 6)
		let npcs = []
		let temp_npc = {}
		let npc_rep = 3
		let npc_species = "Basic"
		
		// we already generated a leader
		if (how_many > 1) {
			how_many = how_many - 1
		} else {
			how_many = 0
		}
		
		if (leader.profession.includes("Joe")) {
			
		} else if (leader.profession == "Mover") {
			let mpresult = 4
			if (planet_class < 3) {
				mpresult = 6
			}
			let mover_2npc = who_are_they(planet_class, spresult)
			let m2npc_roll = utils.rollDice(1,6)
			if (,2npc_roll.total < 3) {
				mover_2npc["rep"] = leader.rep	
			} else {
				mover_2npc["rep"] = leader.rep + 1
				if (mover_2npc["rep"] > 5) {
					mover_2npc["rep"] = 5
				}
			}
			npcs.push(mover_2npc)
			how_many = how_many - 1
		
		} else if (leader.profession == "Shaker") {
			let spresult = 3
			if (planet_class < 3) {
				spresult = 4
			}
			
			let shaker_2npc = who_are_they(planet_class, spresult)
			let s2npc_roll = utils.rollDice(1,6)
			if (s2npc_roll.total < 3) {
				shaker_2npc["rep"] = leader.rep	
			} else {
				shaker_2npc["rep"] = leader.rep	+ 1
				if (shaker_2npc["rep"] > 5) {
					shaker_2npc["rep"] = 5
				}
			}
			npcs.push(shaker_2npc)
			how_many = how_many - 1
		
		} else if (leader.profession == "Exotic") {
		
		} else {
			if (leader.species == "Razor") {
				// page 28 special group rule				
				npcs.push({
					"profession": "Criminal Element",
					"species": "Grath",
					"rep": 4
				})
				how_many = how_many - 1
				
				if (how_many > 0) {
					if (leader_rep_max_roll.total > 5) {
						if (leader.rep > 4) {
							let temp_rce_species = ["Basic","Zhuh-Zhuh","Xeog"]							
							let rce_npc_species = temp_rce_species[Math.floor(Math.random() * temp_rce_species.length)]						
							npcs.push({
								"profession": "Criminal Element",
								"species": rce_npc_species,
								"rep": leader.rep
							})
						} else {
							npcs.push({
								"profession": "Criminal Element",
								"species": "Hishen",
								"rep": leader.rep
							})
						}
					} else {
						npc_rep = leader.rep - 1	
						if (npc_rep < 3) {
							npc_rep = 3
						}					
						npcs.push({
							"profession": "Criminal Element",
							"species": "Hishen",
							"rep": npc_rep
						})						
					}
					how_many = how_many - 1
				}
				
				if (how_many > 0) {
					npc_rep = leader.rep - 1
					if (npc_rep < 3) {
						npc_rep = 3
					}					
					do {
						npcs.push({
							"profession": "Criminal Element",
							"species": "Hishen",
							"rep": npc_rep
						})
						how_many = how_many - 1
					} while (how_many > 0)
				}				
			} else {				
				do {
					temp_npc = leader_generator(planet_class)
					temp_npc.rep = leader.rep - 1
					if (temp_npc.rep < 3) {
						temp_npc.rep = 3
					}
					npcs.push(temp_npc)
					how_many = how_many - 1
				} while (how_many > 0)			
			}
		}
		
		return {
			"planet": planet,
			"leader": leader,
			"npcs": npcs
		}
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
