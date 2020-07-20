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
    
    organization() {
        let table = [
            "Military",
            "Commercial",
            "Secret",
            "Charity",
            "Political",
            "Rescue",
            "Medical",
            "Criminal",
            "Academic",
            "Industrial",
            "Exploratory",
            "Entertainment",
            "Cultural",
            "Ancient",
            "Security",
            "Religious",
            "Training",
            "Detective",
            "Agricultural",
            "Archaeological"
        ]
        
        let defs = {
            "Military": {
                  "what": "owned by a government, it executes violence.",
                  "debt": "Pursued by an enemy.",
                  "how": "works with other militaries or in a military role. Mercenaries!"
            },
            "Commercial": {
                  "what": "owned by a body of investors, it generates profit."
                  "debt": "Not yet profitable."
                  "how": "interacts with commercial entities or incidentally generates profits."
            },
            "Secret": {
                  "what": "owned by unknowns and has shadowy purposes.",
                  "debt": "Someone knows who you are.",
                  "how": "operates under the radar."
            },
            "Charity": {
                  "what": "owned by its membership, it benefits others.",
                  "debt": "Someone wants you to stop.",
                  "how": "provides beneficial works for others and if it is profit seeking, it never seeks profit from those it directly helps."
            },
            "Political": {
                  "what": "owned by its membership, it changes the policies of the State.",
                  "debt": "Opposition is on the brink of violence.",
                  "how": "manipulates political connections."
            },
            "Rescue": {
                  "what": "owned by a government, you assist those in danger.",
                  "debt": "A distress call is incoming. Start with an incoming message: someone is in trouble!",
                  "how": "provides assistance in dangerous circumstances."
            },
            "Medical": {
                  "what": "owned by a government, delivers life-saving technology and skill.",
                  "debt": "Someone nearby is injured or sick.",
                  "how": "has the capability to deploy life-saving technology and skill."
            }
            "Criminal": {
                  "what": "owned by a single person or oligarchy, the purpose of a criminal association is to profit in violation of the law.",
                  "debt": "The last heist went bad.",
                  "how": "the association’s methods are frequently illegal."
            }
            "Academic": {
                  "what": "owned by the public, it is motivated by discovery, analysis, and teaching.",
                  "debt": "An unvisitied location has revelatory information.",
                  "how": "the association is involved in research and publication."
            "Industrial": {
                  "what": "owned by another corporation, it makes things.",
                  "debt": "Short on fuel.",
                  "how": "the association is involved in manufacturing or refinement."
            },
            "Exploratory": {
                  "what": "owned by individuals, it travels to document little known places and things.",
                  "debt": "You have a new map with blank spaces.",
                  "how": "the association is nomadic, searching out its remit in far-flung locales."
            },
            "Entertainment": {
                  "what": "privately owned, it provides frivolous creative works for audiences.",
                  "debt": "They never heard of you here.",
                  "how": "part of the association’s work supports the entertainment industry."
            },
            "Cultural": {
                  "what": "government or privately owned, you facilitate artists, poets, and the like, ensuring their works are seen by many.",
                  "debt": "A new poet has been discovered in this area!",
                  "how": "the association supports or augments cultural endeavours."
            },
            "Ancient": {
                  "what": "this association has changed hands and character thousands of times--it now could be owned by anyone.",
                  "debt": "Something once vital is no longer relevant",
                  "how": "the association does whatever it needs to survive today. It is clogged with self-justifying processes and bureaucracy."
            },
            "Security": {
                  "what": "you ensure the safety and security of persons, organizations, or things at risk. It might be privately owned or it might be an arm of a government.",
                  "debt": "A client is in grave danger.",
                  "how": "one function of the organization is to provide security or security-related materiel."
            },
            "Religious": {
                  "what": "owned by your membership, you are dedicated to perpetuating and expanding belief in their philosophy or mythology.",
                  "debt": "There is proof your god doesn’t exist.",
                  "how": "the organization caters to or is an arm of a religion. This might be a mystical science, deriving from contact with a real god in a particular Tomb, or it might be complete nonsense."
            }
            "Training": {
                  "what": "you train and certify individuals and organizations. It may conduct audits.",
                  "debt": "A client has been declared incompetent.",
                  "how": "one function of the organization is to train or certify."
            },
            "Detective:" {
                  "what": "someone needs to find out who murdered who! You are an investigative organ that digs up the dirt.",
                  "debt": "A client is wanted for murder.",
                  "how": "one function of the organization is to investigate breaches related to its mandate."
            },
            "Agricultural": {
                  "what": "your purpose is to provide farming resources and expertise to allow communities to survive.",
                  "debt": "A critical crop here is dying.",
                  "how": "one aspect of the organization is a wealth of agricultural data and expertise."
            },
            "Archaeological": {
                  "what": "the organization investigates the past by unearthing it, maintaining a vast knowledge of cultures and artifacts.",
                  "debt": "A new site has been discovered.",
                  "how": "one function of the organization is to manage and maintain archaeological sites and artifacts"
            }
        }
    
        let tags = utils.getRandom(table,3)
        
        return {
            "primary": tags[0],
            "secondary": utils.arrayToSentence([tags[1],tags[2]]),
            "definition": defs[tags[0]]
        }
    }
    
}