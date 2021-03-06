import Utils from './utils.js'

const utils = new Utils()

export default class Calypso {
	/*
	The Calypso Compendium
	
	This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC-BY-NC-SA).
	
	URL: https://exposit.github.io/katarpgs/lite/calypsocompendium/
	*/
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
		
		let c2_table1 = [
			"Declare a new danger or inflict harm as promised.",
			"Use the protagonist’s (or someone else’s) character aspects against them.",
			"Put someone in a compromising or high-stakes position.",
			"Bring in someone interesting with an agenda.",
			"Reveal an unwelcome truth.",
			"Offer a hard bargain or an ugly choice."
		]
		
		let c2_table2 = [
			"Turn the protagonist’s action back on them.",
			"Show a drawback to or new facet of the protagonist’s gear or abilities.",
			"Expose a weakness or a past mistake’s consequences.",
			"Take something or someone away.",
			"Show signs of something bad happening off-screen.",
			"Tempt or provoke a reaction."
		]		
		
		let table_roll = utils.rollDice(2, 6)
		
		let choosen_table = null
		
		if (table_roll.diceRolls[0] >= 3) {
			choosen_table = c2_table1
		} else {
			choosen_table = c2_table2
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
	
	race_the_clock(modifier=0, keep="normal") {
		if (modifier > 4) { modifier = 4 } // page 6 "modifiers"
		let roll = utils.rollDice(2, 6, true, keep)
		let total = roll.total + modifier
		let result = ""
		
		let resultOptions = `
* Down to the wire: Existing situations progress and evolve before you finish.
* Distraction : A problem crops up, but you’re busy. Someone else deal with it.
* Cut corners: You won’t get everything. The GM will offer you a hard choice.
* Pushed to the limit: Completing the task causes Stress.
* Gain a light d6 as Currency.
`
		
		if (total >= 10) {
			let currency = utils.rollDice(1, 3)
			result = "On a 10+, you’ll complete the task. Choose one:" + resultOptions
		} else if (total >=7 && total <=9) {
			result = "On a 7-9, choose two from the list:" + resultOptions
		} else {
			result = "On a 6-, the countdown reaches zero, time runs out, the chance for success slips through your fingers. You are left to deal with the fallout. Take a dark d6 as Currency."
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

	seek_the_truth(modifier=0, keep="normal") {
		if (modifier > 4) { modifier = 4 } // page 6 "modifiers"
		let roll = utils.rollDice(2, 6, true, keep)
		let total = roll.total + modifier
		let result = ""
		
		let resultOptions = `
* I know a guy: Someone important, reclusive, or unfriendly has the answers.
* Tread lightly: The answers are found in a hostile, unpleasant location.
* Time sensitive: The answers won’t be available much longer. Hurry.
* Dirty business: Getting the answers takes a lot out of you. Suffer Stress.
* Gain a light d6 as Currency.
`
		
		if (total >= 10) {
			let currency = utils.rollDice(1, 3)
			result = "On a 10+, you’ve got a solid lead. Choose one:" + resultOptions
		} else if (total >=7 && total <=9) {
			result = "On a 7-9, choose two from the list above:" + resultOptions
		} else {
			result = "On a 6-, you find trouble, or trouble finds you. Take a dark d6 as Currency."
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
	
	confront_the_enemy(modifier=0, keep="normal") {
		if (modifier > 4) { modifier = 4 } // page 6 "modifiers"
		let roll = utils.rollDice(2, 6, true, keep)
		let total = roll.total + modifier
		let result = ""
		
		let resultOptions = `
* Hold them off: Keep them busy. They can’t act or cause harm for now.
* Push them back: Change the location and/or position of the conflict.
* Hit them hard: They are shaken, weakened, hurt, or reduced in some way.
* Take them out: You have them now. Choose their fate if you have the upper hand.
* Gain a light d6 as Currency.
`
		
		if (total >= 10) {
			let currency = utils.rollDice(1, 3)
			result = "On a 10+, choose one. They cause harm (stress, costs), then you make a second choice:" + resultOptions
		} else if (total >=7 && total <=9) {
			result = "On a 7-9, the situation escalates dramatically. The stakes are higher, the consequences harsher. You can back down now. If not, choose 1, and they cause harm:" + resultOptions
		} else {
			result = "On a 6-, you suffer Stress and are thrown into a new situation that they dictate. Take a dark d6 as Currency."
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
	
	strive(modifier=0, keep="high") {
		if (modifier > 4) { modifier = 4 } // page 6 "modifiers"
		let num_dice = 2
		let roll = utils.rollDice(num_dice, 6, true, keep)
		let total = roll.total + modifier
		let result = ""
	
		if (total >= 10) {
			result = "You succeed at the goal and avoid the danger entirely. Choose a bonus: you gain a light d6 as Currency or someone loses (or changes) a Condition in a fictionally appropriate way."
		} else if (total >=7 && total <=9) {
			result = "You succeed, but suffer a lesser danger. You may opt to fail instead, or to increase the lesser danger to a greater one, in exchange for choosing a bonus."
		} else {
			result = "You fail, and the full severity of the danger hits you. Take a dark d6 as Currency. If you’re striving against a foe, add a Condition to them that makes it harder for you to overcome them in the way you failed to strive."
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
	
	lesser_danger() {
		let table = [
			"It malfunctions.",
			"Control slips a little.",
			"Something that’s just physical happens between you.",
			"Someone reveals something you wish they hadn’t.",
			"One of your worst qualities hinders you.",
			"They harm you a little."
		]
		return utils.table_random_lookup(table)
	}
	
	greater_danger() {
		let table = [
			"It’s completely broken.",
			"It goes out of control.",
			"It’s emotional too.",
			"You reveal something you wish you hadn’t.",
			"It causes a disaster.",
			"They harm you badly."
		]
		return utils.table_random_lookup(table)	
	}
	
	general_danger() {
		let table = [
			"An enemy strikes without mercy.",
			"An environmental hazard poses a threat.",
			"A natural threat presents.",
			"An ally is in danger.",
			"Someone calls for help.",
			"The environment betrays the protagonist"
		]
		return utils.table_random_lookup(table)		
	}	
	
	oracle(modifier=0, keep="normal") {
		let roll = utils.rollDice(2, 6, true, keep)	
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
			result = `${result} Flawed Assumption: ${dramatic_move.result} (Take a dark die)`
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
	
	complication() {
		let roll = utils.rollDice(2, 6)
		let index1 = (roll.diceRolls[0]-1)
		let index2 = (roll.diceRolls[1]-1)
		
		let table = [
			[
				"You suffer harm.",
				"You attract unwanted attention.",
				"You take a physical condition.",
				"A trauma from your past hinders you.",
				"A part of you you cherish will be tarnished or lost.",
				"A path is closed or barred."
			],
			[
				"You are slowed down.",
				"You are put in a bad position.",
				"You suffer an emotion.",
				"Something you did in the past comes back to bite you.",
				"Something you did yesterday comes back to bite you.",
				"A short term goal is no longer achievable."
			],
			[
				"Someone learns something you’d rather they didn’t.",
				"Something goes out of control.",
				"You are made emotionally vulnerable.",
				"One of your long-term goals is set back significantly.",
				"One of your weakness will be revealed.",
				"Something breaks."
			],
			[
				"One of your worst qualities hinders you.",
				"Something malfunctions and is no longer usable.",
				"You are made physically vulnerable.",
				"One of your cherished dreams or illusions is shattered.",
				"One of your secrets will be revealed.",
				"You lose control."
			],
			[
				"One of your best qualities is used against you.",
				"Someone taunts you or reveals your failings.",
				"You discover something you’d rather not.",
				"Someone you don’t want to will suffer harm.",
				"The environment changes for the worse.",
				"You gain a status effect like blind or unconscious."
			],
			[
				"You are caught in the act.",
				"You look foolish.",
				"Someone’s feelings toward you are revealed.",
				"Someone’s regard for you changes.",
				"You are forced to compromise your morals or ethics.",
				"Roll a random event."
			]
		]
		
		let result = table[index1][index2]
		
		return {
			"dice": {
				"rolls": roll.diceRolls,
				"total": roll.total
			},
			"result": result
		}
	}
	
}