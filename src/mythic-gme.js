import Utils from './utils.js'

const utils = new Utils()

export default class MythicGME {
	constructor(){
        this._chaos = 5
        this._odds = 5
        this._acting = 5
        this._defending = 5
	    this._fate = [
        [50,25,10,5,5,0,0,-20,-20,-40,-40,-55,-65],
        [75,50,25,15,10,5,5,0,0,-20,-20,-34,-45],
        [90,75,50,35,25,15,10,5,5,0,0,-15,-25],
        [95,85,65,50,45,25,15,10,5,5,5,-5,-15],
        [100,90,75,55,50,35,20,15,10,5,5,0,-10],
        [105,95,85,75,65,50,35,25,15,10,10,5,-5],
        [110,95,90,85,80,65,50,45,25,20,15,5,0],
        [115,100,95,90,85,75,55,50,35,25,20,10,5],
        [120,105,95,95,90,85,75,65,50,45,35,15,5],
        [125,115,100,95,95,90,80,75,55,50,45,20,10],
        [130,125,110,95,95,90,85,80,65,55,50,25,10],
        [150,145,130,100,100,95,95,90,85,80,75,50,25],
        [170,165,150,120,120,100,100,95,95,90,90,75,50]]
        
        this._eventFocus = [
        [7, "Remote event"], 
        [28, "NPC action"],
        [35, "Introduce a new NPC"],
        [45, "Move toward a thread"],
        [52, "Move away from a thread"],
        [55, "Close a thread"], 
        [67, "PC negative"], 
        [75, "PC positive"],
        [83, "Ambiguous event"],
        [92, "NPC negative"],
        [100, "NPC positive"]]
        
        this._oddsLabels = [
            "Impossible",
            "No Way",
            "Very unlikely", 
            "Unlikely",
            "50/50",
            "Somewhat likely",
            "Likely", 
            "Very likely",
            "Near sure thing",
            "A sure thing",
            "Has To Be"] 
        
        this._rankLabels = [
            "Miniscule 2+",
            "Miniscule",
            "Weak",
            "Low", 
            "Below Average",
            "Average",
            "Above Average",
            "High", 
            "Exceptional",
            "Incredible",
            "Awesome",
            "Superhumna",
            "Superhuman 2+"]
	}

    get chaos() {
        return this._chaos
    }
    
    set chaos(value) {
        if (value >= 1 && value <= 9) {
            this._chaos = value
        } else {
            throw "Chaos value is out of range, must be between 1 and 9"
        }
    }
    
    get odds() {
        return this._odds
    }
    
    set odds(value) {
        this._odds = value
    }
    
    get acting() {
        return this._acting
    }
    
    set acting(value) {
        this._acting = value
    }
    
    get defending() {
        return this._defending
    }
    
    set defending(value) {
        this._defending = value
    }

    get fateChart() {
        return this._fate;
    }
    
    get eventFocusChart() {
        return this._eventFocus;
    }
    
    get oddsLabels() {
        return this._oddsLabels;
    }
    
    get rankLabels() {
        return this._rankLabels;
    }
    
    yes_no_question(acting_rank, defending_rank) {
        let diceResult = utils.rollDice(2,10,false)
        let die1 = diceResult.diceRolls[0]
        let die2 = diceResult.diceRolls[1]
        let res = (die1 + die2 === 0)?100: die1*10+die2
        let event = false
        if (die1 === die2 && die1 <= this.chaos && res != 100) {
            event = true
            //rollEvent();
        }
        // acting can also be "odds" and defending "chaos"        
        let yes = this.fateChart[acting_rank][defending_rank]
        let critYes = Math.floor(yes/5)
        let critNo = (yes < 100)?100 - Math.floor((100 - yes)/5) + 1 : 0
        let ans = "unknown"
        if (res <= critYes) {
            ans = "Exceptional Yes!"
        } else if (res <= yes) {
            ans = "Yes"
        } else if (res < critNo) {
            ans = "No"
        } else {
            ans = "Exceptional No!"
        }
        
        return {
            "answer": ans,
            "dice": {
                "total": res,
                "rolls": diceResult.diceRolls
            },
            "critYes": critYes,
            "critNo": critNo,            
            "event": event
        }
    }
}
