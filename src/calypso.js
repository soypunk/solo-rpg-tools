import Utils from './utils.js'

const utils = new Utils()

export default class Calypso {
	constructor(){
	}
	
	dramatic_move() {
		let table1 = [
			"Put someone in a compromising, bad, or high-stakes position.",
			"Expose a weakness or a past mistake’s consequences.",
			"Reveal an unexpected danger.",
			"Promise future pain or inflict harm as promised.",
			"Tempt or provoke a reaction.",
			"Take something or someone away."
		]
		let table2 = [
			"Use the hero’s Traits, Conditions, or Secrets against them.",
			"Turn the hero’s move back on them.",
			"Show off-screen badness.",
			"Bring in someone interesting with an agenda.",
			"Show a drawback to or new facet of the hero’s gear or abilities.",
			"Offer a hard bargain or an ugly choice."
		]
		
		let table_roll = utils.rollDice(2, 6)
		
		let choosen_table = null
		
		if (table_roll.diceRolls[0] >= 3) {
			choosen_table = table1
		} else {
			choosen_table = table2
		}				
		
		let result = choosen_table[(table_roll.diceRolls[1]-1)]
		
		return {
			"dice": {
				"rolls": table_roll,
				"total": table_roll.total
			},
			result: result
		}
	}
	
}