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
			1: "Acid spitter",
			2: "Annihilator pistol",
			3: "Anti-tank grenades",
			4: "Antimatter ray",
			5: "Assault rifle with armour-piercing ammo",
			6: "Assault rifle with heat-seeking AI rounds",
			7: "Autolaser",
			8: "Battleglove",
			9: "Black light gun",
		   10: "Blast pistol with red dot laser sight",
		   11: "Carbon pistol",
		   12: "Chainsaw",
		   13: "Continuous beam projector",
		   14: "Death ray",
		   15: "Disintegrator",
		   16: "Drillgun",
		   17: "Electro-whip",
		   18: "Electrolaser",
		   19: "EMP blaster",
		   20: "Energy bow",
		   21: "Flamethrower",
		   22: "Flash-bang grenades",
		   23: "Flechette pistol",
		   24: "Force bubble projector",
		   25: "Forearm blaster",
		   26: "Frag grenades",
		   27: "Freeze ray",
		   28: "Fusion gun",
		   29: "Gatling blaster",
		   30: "Grappling hook gun",
		   31: "Gravity gun",
		   32: "Green energy ring",
		   33: "Harpoon gun",
		   34: "Haywire grenades",
		   35: "Heat ray",
		   36: "Heavy cutting laser",
		   37: "Heavy mag pistol",
		   38: "Heavy repeating blaster",
		   39: "Hypervelocity shotgun",
		   40: "Hypno-ray",
		   41: "Implosion grenades",
		   42: "Incendiary grenades",
		   43: "Ion blaster",
		   44: "Kinetic energy grenades",
		   45: "Laser cannon",
		   46: "Laser disguised as everyday object",
		   47: "Laserblade",
		   48: "Lightning gun",
		   49: "Living gun that fires teeth",
		   50: "Massive bomb",
		   51: "Combi-weapon (roll twice and combine them into one weapon)",
		   52: "Microwaver",
		   53: "Missile launcher",
		   54: "Mk 1 laser pistol with heavy power pack",
		   55: "Molecular disassembler",
		   56: "Mono-molecular edge katana",
		   57: "Monofilament shredder",
		   58: "Nanotoxin injector",
		   59: "Nerve gas",
		   60: "Neural scrambler",
		   61: "Nova cannon",
		   62: "Nullifier",
		   63: "Pain inducer",
		   64: "Panic ray",
		   65: "Paralysis ray",
		   66: "Particle accelerator",
		   67: "Plague rifle",
		   68: "Plasma carbine",
		   69: "Power field",
		   70: "Precision laser rifle with invisible tracing beam",
		   71: "Pulse rifle with underslung grenade launcher",
		   72: "Pump-action shotgun",
		   73: "Quantum deconstructor",
		   74: "Railgun",
		   75: "Ramjet sniper rifle with laser sight",
		   76: "Remote-controlled gun drone",
		   77: "Revolver (antique)",
		   78: "Sabre (antique)",
		   79: "Shardgun",
		   80: "Shock mace",
		   81: "Shoulder-mounted autocannon",
		   82: "Shuriken rifle (full auto)",
		   83: "Smartgun",
		   84: "Smoke grenades",
		   85: "Snarenet launcher",
		   86: "Sonic disruptor",
		   87: "Starfire photon cannon",
		   88: "Stinger pistol",
		   89: "Strontium beamer",
		   90: "Stun gun",
		   91: "Submachine gun",
		   92: "Subsonic coilgun (totally silent)",
		   93: "Teleportation gun",
		   94: "Thermic lance",
		   95: "Thunder blaster",
		   96: "Tron disc",
		   97: "Turbolaser",
		   98: "Twin autopistols",
		   99: "Vibro-halberd with built-in blaster",
		  100: "Wrist-mounted rocket launcher"
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