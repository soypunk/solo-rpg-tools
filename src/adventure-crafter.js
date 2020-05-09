import Utils from './utils.js'

const utils = new Utils()

export default class AdventureCrafter {

    constructor() {
        this._themes = ['Action','Tension','Mystery','Social','Personal']
        this._themesTable = [
        [2,"Action"],
        [4,"Tension"],
        [6,"Mystery"],
        [8,"Social"],
        [11,"Personal"]]
    }
    
    get themes() {
        return this._themes
    }
    
    get themesTable() {
        return this._themesTable
    }    
    
	theme() {
		let diceResult = utils.rollDice(1,10)
        let result = utils.getClosetRolledMatch(this.themesTable,diceResult.total)
        

        return {
            "result": result,
            "dice": {
                "total": diceResult.total,
                "rolls": diceResult.diceRolls
            }
        }
	}    
}
