import Utils from './utils.js'

const utils = new Utils()

export default class SciFi {

    constructor() {}
    
	how_many_of_them(band_size=1) {
		let rolls = utils.rollDice(2, 3)		
		let how_many = (rolls.diceRolls[0]+band_size) - (rolls.diceRolls[1])	
		if (how_many < 1) { how_many = 1 }	
		return how_many
	}
    
    misjump() {
        let table = [
            "Arrive a week late",
            "Random jump lane traveled",
            "Life support malfunction",
            "Fatigue (loss of 1 inventory slot)",
            "Cargo compromised",
            "Arrive at uncharted system"
        ]
        return utils.getRandom(table)[0]
    }
    
    bad_consequence(mod=0,safe=true) {
        let table = {
            2: "Death",
            5: "Serious Injury",
            6: "Minor injury",
            7: "Trapped, lost or delayed",
            8: "Part of the mission was failed or incriminating evidence left behind",
            9: "Damage to a useful or valuable piece of kit",
            10: "Seriously upset or antagonise an NPC",
            11: "The task takes four times longer than planned"
        }
        if (safe == true) {
            let roll = utils.rollDice(2,6)
        } else {
            let roll = utils.rollDice(1,6)
            roll.total += 6
        }
        roll.total += mod
        // if (roll.total < 2) { roll.total = 2 }
        return utils.getClosestKey(table, roll.total)
    }
 
    encounter_site_exploration() {
        let table = [
            "Encounter with NPCs or object",
            "Hint as to what is nearby",
            "Local effect (door closes, klaxons)",
            "Complication",
            "Glitch (device/resource fails)",
            "Panic (morale fails, ally flees)"
        ]
        return utils.getRandom(table)[0]
    }

    encounter_overland_exploration() {
        let table = [
            "Encounter with NPCs or quirk",
            "Hint as to what is nearby",
            "Complication",
            "Beacon (distress call, local alert)",
            "Fatigue (loss of 1 inventory slot)",
            "Hidden feature (typically positive)"
        ]
        return utils.getRandom(table)[0]
    }
    
    encounter_urban_exploration() {
        let table = [
            "Complication",
            "Curious and/or helpful NPC",
            "Quirk",
            "Antagonistic and/or annoying NPC",
            "Faction agents",
            "Lucky breakthrough"
        ]
        return utils.getRandom(table)[0]
    }
    
    
    
}