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
	
	leader_generator(planet_class=1) {
		let npc = this.who_are_they(planet_class)
		npc["rep"] = rep_generator(leader.species)
		return npc
	}
	
	npc_generator(planet_class=1,leader_rep=3,same_as_leader_rep=false,profession_result=none) {
		let npc = this.who_are_they(planet_class,profession_result)
		if (same_as_leader_rep == true) {
			npc["rep"] = leader_rep
		} else {
			npc["rep"] = leader_rep - 1		
			if (npc["rep"] < 3) {
				npc["rep"] = 3
			}
		}
		return npc
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
		let npcs = [leader]
		let npc = none
		how_many = how_many - 1
		let same_as_leader_rep = false
		let leader_rep_max_roll = utils.rollDice(1, 6)
		if (leader_rep_max_roll.total == 6) {
			same_as_leader_rep = true
		}
		let professional_result = none
						
		if (how_many > 0) {							

			if (leader.profession == "Mover") {
				if (planet_class == 3) {
					professional_result = 4
				} else {
					professional_result = 6
				}				
				npc = this.npc_generator(
					planet_class,
					leader.rep,
					same_as_leader_rep,
					professional_result
				)
				let mover_2_rep = utils.rollDice(1, 6)
				if (mover_2_rep < 3) {
					npc.rep = leader_rep
				} else {
					npc.rep = leader_rep + 1
					if (npc.rep > 5) {
						npc.rep = 5
					}
				}
				npcs.push(npc)
			} else if (leader.profession == "Shaker") {
				if (planet_class == 3) {
					professional_result = 3
				} else {
					professional_result = 4
				}
				npc = this.npc_generator(
					planet_class,
					leader.rep,
					same_as_leader_rep,
					professional_result
				)
				let shaker_2_rep = utils.rollDice(1, 6)
				if (shaker_2_rep < 3) {
					npc.rep = leader_rep
				} else {
					npc.rep = leader_rep + 1
					if (npc.rep > 5) {
						npc.rep = 5
					}
				}
				npcs.push(npc)
			} else if (leader.profession == "Criminal Element") {
				if (leader.species == "Razor") {
					
				}

			} else if (leader.profession.includes("Joe")) {
				if (leader.profession == "Joe - Serice") {
					if (planet_class = 3) {
						professional_result = 6
					} else {
						professional_result = 7
					}
				} else {
					if (planet_class = 3) {
						professional_result = 8
					} else {
						professional_result = 7
					}
				}

				npc = this.npc_generator(
					planet_class,
					leader.rep,
					same_as_leader_rep,
					professional_result
				)				
				npcs.push(npc)
			} else {
				npc = this.npc_generator(
					planet_class,
					leader.rep,
					same_as_leader_rep,
					professional_result
				)			
				npcs.push(npc)
			}
			how_many = how_many - 1
			
			if (how_many > 0) {
				professional_result = none
				do {									
					if (leader.species == "Razor") {
						npc = {
							"profession": "Criminal Element",
							"species": "Hishen",
							"rep" = this.rep_generator("hishen")
						}
						if (npc.rep > leader.rep) {
							npc.rep = npc.rep - 1
							if (npc.rep < 3) {
								npc.rep = 3
							}
						}
					} else if (leader.profession == "Shaker") {
						if (planet_class == 3) {
							professional_result = 3
						} else {
							professional_result = 4
						}
						npc = this.npc_generator(
							planet_class,
							leader.rep,
							same_as_leader_rep,
							professional_result
						)						
					} else if (leader.profession == "Mover") {
						// one mover, then shakers
						npc = this.npc_generator(
							planet_class,
							leader.rep,
							same_as_leader_rep,
							professional_result
						)
					} else {
						npc = this.npc_generator(
							planet_class,
							leader.rep,
							same_as_leader_rep,
							professional_result
						)					
					}
			
					npcs.push(npc)					
					how_many = how_many - 1
				} while(how_many > 0)
			}
		}	
		
		return {
			"planet": planet,
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
