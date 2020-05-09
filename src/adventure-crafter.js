import Utils from './utils.js'

const utils = new Utils()

export default class AdventureCrafter {

    constructor() {
        this._baseThemes = ['Action','Tension','Mystery','Social','Personal']
        this._themes = this._baseThemes
        this._themesTable = [
        [2,this.themes[0]],
        [4,this.themes[1]],
        [6,this.themes[2]],
        [8,this.themes[3]],
        [11,this.themes[4]]]
    }

    get baseThemes() {
        return this._baseThemes
    }
    
    get themes() {
        return this._themes
    }
    
    set initThemesTable() {
        this._themesTable = [
        [2,this.themes[0]],
        [4,this.themes[1]],
        [6,this.themes[2]],
        [8,this.themes[3]],
        [11,this.themes[4]]]
    }
    
    set themes(themes) {
        let isProperThemeArray = areArraysEqualSets(themes,this.baseThemes)
        
        if(isProperThemeArray) {
            this._themes = themes
            this.initThemesTable()
        } else {
            throw "Your theme array contains an invalid set of Adventure Crafter themes. Custom themes are not supported."
        }
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
