import Utils from './utils.js'

const utils = new Utils()

export default class Calypso {
	constructor(){
		this._oddsLabels=[
            "Very unlikely", 
            "Unlikely",
            "Somewhat unlikely",
            "50/50",
            "Somewhat likely",
            "Likely", 
            "Very likely"
		]
		this._oddsModifiers=[
            -3,
            -2,
            -1,
            0,
            1,
            2,
            3
		]
	}
	
    get oracleOddsLabels() {
        return this._oddsLabels;
    }
    
    get oracleOddsModifer() {
        return this._oddsModifiers;
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
				"rolls": table_roll.diceRolls,
				"total": table_roll.total
			},
			"result": result
		}
	}
	
	strive(modifier=0) {
		if (modifier > 4) { modifier = 4 } // page 6 "building a modifier"
		let roll = utils.rollDice(2, 6)
		let total = roll.total + modifier
		let result = ""
	
		if (total >= 10) {
			let currency = utils.rollDice(1, 3)
			result = "You succeed at the goal and avoid the risk. Choose one that fits: gain 1d6/2 Currency, gain a +2 bonus on the next Strive roll, or lose, change, or gain a Condition."
		} else if (total >=7 && total <=9) {
			result = "You succeed at the goal or avoid the risk, your choice. If you choose success, deliver the risk by following up on a previous soft Move with the consequences or playing a new hard Move. Otherwise, introduce a new soft Move that makes achieving the goal harder."
		} else {
			result = "You fail at the goal and the risk hits you. Deliver on the risk’s threat with the consequences of a previous soft Move or deliver a new hard Move, then introduce a new soft Move that makes achieving the goal impossible in the short term. Earn one Currency."
		}
			
		return {
			"dice": {
				"rolls": roll.diceRolls,
				"total": total
			},
			"modifier": modifier,
			"result": result
		}
	}
	
	oracle(modifier=0) {
	
		let roll = utils.rollDice(2, 6)	
		let total = roll.total + modifier
		let result = ""
	
		if (total >= 10) {
			result = "Yes!"
		} else if (total >=7 && total <=9) {
			result = "Yes"
			if (roll.diceRolls[0] > roll.diceRolls[1]) {
				result = `${result}, and.`
			} else {
				result = `${result}, but.`			
			}
		} else {
			result = "No"
			if (roll.diceRolls[0] > roll.diceRolls[1]) {
				result = `${result}, and.`
			} else {
				result = `${result}, but.`			
			}
		}
	
		if (roll.diceRolls[0] == roll.diceRolls[1]) {
			let dramatic_move = this.dramatic_move()
			result = `${result} Scene Interrupt: ${dramatic_move.result}`
		}
	
		return {
			"dice": {
				"rolls": roll.diceRolls,
				"total": total
			},
			"modifier": modifier,
			"result": result
		}
	}
	
}