import Utils from './utils.js'

const utils = new Utils()

export default class Superluminary {
	constructor(){
	}

	_d10_lookup(table){
		let roll = utils.rollDice(1, 10)
		return {
			"roll": roll.total,
			"result": table[roll.total] 
		}
	}
	
	_d100_lookup(table){
		let roll = utils.d100()
		return {
			"roll": roll,
			"result": table[roll] 
		}
	}

	pocket_dimension(){
		let table = {
			1: "Arachnoid nest",
			2: "Imploding wormhole",
			3: "Sideways-space",
			4: "Synaesthesia and psychedelic weirdness",
			5: "The dreamsea",
			6: "The machine realm",
			7: "The microverse",
			8: "The negative zone",
			9: "The phantom zone",
			10: "The river of time"
		}		
		return this._d10_lookup(table)
	}

	flaw(){
		
	}

	npc_personality_trait(){}
	
	cargo(){}
	
	ship_trait(){}
	
	weapon(){
		let table = {
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
		   10: "",
		   11: "",
		   12: "",
		   13: "",
		   14: "",
		   15: "",
		   16: "",
		   17: "",
		   18: "",
		   19: "",
		   20: "",
		   21: "",
		   22: "",
		   23: "",
		   24: "",
		   25: "",
		   26: "",
		   27: "",
		   28: "",
		   29: "",
		   30: "",
		   31: "",
		   32: "",
		   33: "",
		   34: "",
		   35: "",
		   36: "",
		   37: "",
		   38: "",
		   39: "",
		   40: "",
		   41: "",
		   42: "",
		   43: "",
		   44: "",
		   45: "",
		   46: "",
		   47: "",
		   48: "",
		   49: "",
		   50: "",
		   51: "",
		   52: "",
		   53: "",
		   54: "",
		   55: "",
		   56: "",
		   57: "",
		   58: "",
		   59: "",
		   60: "",
		   61: "",
		   62: "",
		   63: "",
		   64: "",
		   65: "",
		   66: "",
		   67: "",
		   68: "",
		   69: "",
		   70: "",
		   71: "",
		   72: "",
		   73: "",
		   74: "",
		   75: "",
		   76: "",
		   77: "",
		   78: "",
		   79: "",
		   80: "",
		   81: "",
		   82: "",
		   83: "",
		   84: "",
		   85: "",
		   86: "",
		   87: "",
		   88: "",
		   89: "",
		   90: "",
		   91: "",
		   92: "",
		   93: "",
		   94: "",
		   95: "",
		   96: "",
		   97: "",
		   98: "",
		   99: "",
		  100: ""
		}
		return this._d100_lookup(table)
	}
	
	world_planet_type(){}
	
	world_primary_inhabitants(){}
	
	war_machine_trait(){}

	special_abilities(){}

	city_encounter(){}

	space_encounter(){}

	wilderness_encoutner(){}	

/*

		let table = {
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
		   10: "",
		   11: "",
		   12: "",
		   13: "",
		   14: "",
		   15: "",
		   16: "",
		   17: "",
		   18: "",
		   19: "",
		   20: "",
		   21: "",
		   22: "",
		   23: "",
		   24: "",
		   25: "",
		   26: "",
		   27: "",
		   28: "",
		   29: "",
		   30: "",
		   31: "",
		   32: "",
		   33: "",
		   34: "",
		   35: "",
		   36: "",
		   37: "",
		   38: "",
		   39: "",
		   40: "",
		   41: "",
		   42: "",
		   43: "",
		   44: "",
		   45: "",
		   46: "",
		   47: "",
		   48: "",
		   49: "",
		   50: "",
		   51: "",
		   52: "",
		   53: "",
		   54: "",
		   55: "",
		   56: "",
		   57: "",
		   58: "",
		   59: "",
		   60: "",
		   61: "",
		   62: "",
		   63: "",
		   64: "",
		   65: "",
		   66: "",
		   67: "",
		   68: "",
		   69: "",
		   70: "",
		   71: "",
		   72: "",
		   73: "",
		   74: "",
		   75: "",
		   76: "",
		   77: "",
		   78: "",
		   79: "",
		   80: "",
		   81: "",
		   82: "",
		   83: "",
		   84: "",
		   85: "",
		   86: "",
		   87: "",
		   88: "",
		   89: "",
		   90: "",
		   91: "",
		   92: "",
		   93: "",
		   94: "",
		   95: "",
		   96: "",
		   97: "",
		   98: "",
		   99: "",
		  100: ""
		}

*/
	
}