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
            
        this._eventMeaningActions = ['Attainment', 'Starting', 'Neglect', 'Fight', 'Recruit', 'Triumph', 'Violate', 'Oppose', 'Malice', 'Communicate', 'Persecute', 'Increase', 'Decrease', 'Abandon', 'Gratify', 'Inquire', 'Antagonise', 'Move', 'Waste', 'Truce', 'Release', 'Befriend', 'Judge', 'Desert', 'Dominate', 'Procrastinate', 'Praise', 'Separate', 'Take', 'Break', 'Heal', 'Delay', 'Stop', 'Lie', 'Return', 'Immitate', 'Struggle', 'Inform', 'Bestow', 'Postpone', 'Expose', 'Haggle', 'Imprison', 'Release', 'Celebrate', 'Develop', 'Travel', 'Block', 'Harm', 'Debase', 'Overindulge', 'Adjourn', 'Adversity', 'Kill', 'Disrupt', 'Usurp', 'Create', 'Betray', 'Agree', 'Abuse', 'Oppress', 'Inspect', 'Ambush', 'Spy', 'Attach', 'Carry', 'Open', 'Carelessness', 'Ruin', 'Extravagance', 'Trick', 'Arrive', 'Propose', 'Divide', 'Refuse', 'Mistrust', 'Deceive', 'Cruelty', 'Intolerance', 'Trust', 'Excitement', 'Activity', 'Assist', 'Care', 'Negligence', 'Passion', 'Work hard', 'Control', 'Attract', 'Failure', 'Pursue', 'Vengeance', 'Proceedings', 'Dispute', 'Punish', 'Guide', 'Transform', 'Overthrow', 'Oppress', 'Change']
        
        this._eventMeaningSubjects = ['Goals','Dreams','Environment','Outside','Inside','Reality','Allies','Enemies','Evil','Good','Emotions','Opposition','War','Peace','The innocent','Love','The spiritual','The intellectual','New ideas','Joy','Messages','Energy','Balance','Tension','Friendship','The physical','A project','Pleasures','Pain','Possessions','Benefits','Plans','Lies','Expectations','Legal matters','Bureaucracy','Business','A path','News','Exterior factors','Advice','A plot','Competition','Prison','Illness','Food','Attention','Success','Failure','Travel','Jealousy','Dispute','Home','Investment','Suffering','Wishes','Tactics','Stalemate','Randomness','Misfortune','Death','Disruption','Power','A burden','Intrigues','Fears','Ambush','Rumor','Wounds','Extravagance','A representative','Adversities','Opulence','Liberty','Military','The mundane','Trials','Masses','Vehicle','Art','Victory','Dispute','Riches','Status quo','Technology','Hope','Magic','Illusions','Portals','Danger','Weapons','Animals','Weather','Elements','Nature','The public','Leadership','Fame','Anger','Information']           
        
        this._detailsChart = [
            [-4, "Anger"],
            [5, "Sadness"],
            [6, "Fear"],
            [7, "Disfavors Thread"],
            [8, "Disfavors PC"],
            [9, "Focus NPC"],
            [10, "Favors NPC"],
            [11, "Focus PC"],
            [12, "Disfavors NPC"],
            [13, "Focus Thread"],
            [14, "Favors NPC"],
            [15, "Favors Thread"],
            [16, "Courage"],
            [17, "Happiness"],
            [24, "Calm"]]
        
        this._modifierTable = {
            "1": 4,
            "2": 3,
            "3": 2,
            "4": 1,
            "5": 0,
            "6": 1,
            "7": 2,
            "8": 3,
            "9": 4           
        }
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
    
    get eventMeaningActions() {
        return this._eventMeaningActions;
    }
    
    get eventMeaningSubjects() {
        return this._eventMeaningSubjects;
    }    
    
    get oddsLabels() {
        return this._oddsLabels;
    }
    
    get rankLabels() {
        return this._rankLabels;
    }
    
    get modifierTable() {
        return this._modifierTable;    
    }
    
    get detailsChart() {
        return this._detailsChart;    
    }
    
    description() {
        let descriptor_one_table = ["Abnormally","Adventurously","Aggressively","Angrily","Anxiously","Awkwardly","Beautifully", "Bleakly","Boldly","Bravely","Busily","Calmly","Carefully","Carelessly","Cautiously","Ceaselessly", "Cheerfully","Combatively","Coolly","Crazily","Fully","Generously","Gently","Gladly","Gracefully", "Gratefully","Happily","Hastily","Healthily","Helpfully","Helplessly","Hopelessly","Innocently", "Intensely","Interestingly","Irritatingly","Jovially","Joyfully","Judgementally","Kindly", "Peacefully","Perfectly","Playfully","Politely","Positively","Powerfully","Quaintly","Quarrelsomely", "Quietly","Roughly","Rudely","Ruthlessly","Slowly","Softly","Swiftly","Threateningly","Very","Violently", "Wildly","Yieldingly","Curiously","Daintily","Dangerously","Defiantly","Deliberately","Delightfully", "Dimly","Efficiently","Energetically","Enormously","Enthusiastically","Excitedly","Fearfully", "Ferociously","Fiercely","Foolishly","Fortunately","Frantically","Freely","Frighteningly","Kookily", "Lazily","Lightly","Loosely","Loudly","Lovingly","Loyally","Majestically","Meaningfully","Mechanically","Miserably","Mockingly","Mysteriously","Naturally","Neatly","Nicely","Oddly","Offensively","Officially","Partially", "Peacefully", "Perfectly", "Playfully", "Politely", "Positively", "Powerfully", "Quaintly","Quarrelsomely" , "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly", "Softly", "Swiftly","Threateningly", "Very", "Violently", "Wildly", "Yieldingly"]
        let descriptor_two_table = ["Abandoned","Abnormal","Amusing","Ancient","Aromatic","Average","Beautiful","Bizarre","Classy","Clean","Cold","Colorful","Creepy","Cute","Damaged","Dark","Defeated","Delicate","Delightful","Dirty","Graceful","Hard","Harsh","Healthy","Heavy","Historical","Horrible","Important","Interesting","Juvenile","Lacking","Lame","Large","Lavish","Lean","Less","Lethal","Lonely","Lovely","Macabre","Remarkable","Rotten","Rough","Ruined","Rustic","Scary","Simple","Small","Smelly","Smooth","Soft","Strong","Tranquil","Ugly","Valuable","Warlike","Warm","Watery","Weak","Young","Disagreeable","Disgusting","Drab","Dry","Dull","Empty","Enormous","Exotic","Faded","Familiar","Fancy","Fat","Feeble","Feminine","Festive","Flawless","Fresh","Full","Glorious","Good","Magnificent","Masculine","Mature","Messy","Mighty","Military","Modern","Extravagant","Mundane","Mysterious","Natural","Nondescript","Odd","Pale","Petite","Poor","Powerful","Quaint","Rare","Reassuring"]
        var descriptor_one = descriptor_one_table[Math.floor(Math.random() * descriptor_one_table.length)]
        var descriptor_two = descriptor_two_table[Math.floor(Math.random() * descriptor_two_table.length)]
        return `${descriptor_one} ${descriptor_two}`
    }
    
    action() {
        let action_one_table = ["Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate","Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonize","Move","Waste","Truce","Expose","Haggle","Imprison","Release","Celebrate","Develop","Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse","Excitement","Activity","Assist","Care","Negligence","Passion","Work","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform","Overthrow","Oppress","Change","Release","Befriend","Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal","Delay","Stop","Lie","Return","Imitate","Struggle","Inform","Bestow","Postpone","Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide","Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust"]
        let action_two_table = ["Goals","Dreams","Environment","Outside","Inside","Reality","Allies","Enemies","Evil","Good", "Emotions","Opposition","War","Peace","Innocent","Love","Spirit","Intellect","Ideas","Joy", "Advice","Plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel", "Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness", "Misfortune","Victory","Dispute","Riches","Normal","Technology","Hope","Magic","Illusions","Portals", "Danger","Weapons","Animals","Weather","Elements","Nature","Masses","Leadership","Fame","Anger", "Information","Messages","Energy","Balance","Tension","Friendship","Physical","Project","Pleasures", "Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal","Bureaucracy","Business", "Path","News","Exterior","Death","Disruption","Power","Burden","Intrigues","Fears","Ambush","Rumor", "Wounds","Extravagance","Representative","Adversities","Opulence","Liberty","Military","Mundane", "Trials","Masses","Vehicle","Art"]
        var action_one = action_one_table[Math.floor(Math.random() * action_one_table.length)]
        var action_two = action_two_table[Math.floor(Math.random() * action_two_table.length)]
        return `${action_one} ${action_two}`
    }    
    
    event() {        
        let eventFocusDiceResult = utils.rollDice(1,100)
        let eventFocus = utils.getClosetRolledMatch(this.eventFocusChart,eventFocusDiceResult.total)
        let eventMeaningDiceResult = utils.rollDice(2,100,false)
        let eventAction = this.eventMeaningActions[eventMeaningDiceResult.diceRolls[0]]
        let eventSubject = this.eventMeaningSubjects[eventMeaningDiceResult.diceRolls[1]]
        
        return {
            "focus": eventFocus,
            "action": eventAction,
            "subject": eventSubject,
            "dice": {
                "total": eventFocusDiceResult.total,
                "rolls": eventFocusDiceResult.diceRolls.concat(eventMeaningDiceResult.diceRolls)
            }
        }
    }
    
    detail() {
        let modifier = this.modifierTable[this.chaos]
        if(this.chaos > 5) {
            modifier = -Math.abs(modifier)
        }
        let diceResult = utils.rollDice(2,10)
        diceResult.total = diceResult.total + modifier

        let detailResult = utils.getClosetRolledMatch(this.detailsChart,diceResult.total)
        
        return {
            "detail": detailResult,
            "dice": {
                "total": diceResult.total,
                "rolls": diceResult.diceRolls,
            }
        }
    }
    
    yesNoQuestion(acting_rank, defending_rank) {
        let diceResult = utils.rollDice(2,10,false)
        let die1 = diceResult.diceRolls[0]
        let die2 = diceResult.diceRolls[1]
        let res = (die1 + die2 === 0)?100: die1*10+die2
        let event = false
        if (die1 === die2 && die1 <= this.chaos && res != 100) {
            event = this.event()
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
    
    sceneSetup() {
        let diceResult = utils.rollDice(1,10)
        let res = "Scene unchanged"
        let event = false
        if (diceResult.total <= this.chaos) {
            event = this.event()
            if (diceResult.total * 2 < this.chaos + 2) {
                res = "Scene altered"
            } else {
                res = "Scene interupted!"
            }
        }
        return {
            "status": res,
            "event": event,
            "dice": {
                "total": diceResult.total,
                "rolls": diceResult.diceRolls
            }
        }
    }
    
	statCheck(attribute_value=null,
	          important_npc=false,
	          prime_attribute=false,
	          weak_attributes=0,
	          strong_attributes=0,
	          round=true) {
	  attribute_value = Number(attribute_value)
	  let baseline_value = attribute_value
	  let result = ''
	  let rolls = utils.rollDice(2,10)
	  let total = rolls.total
	  
	  if (important_npc) {
	    total += 2
	  }
	  
	  if (prime_attribute) {
	    total += 4
	  }
	  
      for(var i=0; i < weak_attributes; i++){
        total -= 2  
      }
      
      for(var i=0; i < strong_attributes; i++){
        total += 2  
      }

	  if (total < 3) {
		  var modifier = (75 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = "Very Weak -75%";
	  } else if (total < 5) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = 'Weak -50%';
	  } else if (total < 7) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value - modifier;
		  result = 'Less -10%';
	  } else if (total < 12) {
		  result = 'Expected Baseline';
	  } else if (total < 15) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'More +10%';
	  } else if (total < 17) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'Strong +50%';
	  } else if (total < 19) {
		  var modifier = (100 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'Very Strong +100%';
	  } else if (total < 21) {
		  result = 'PC Baseline';
	  } else if (total < 23) {
		  var modifier = (10 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC More +10%';
	  } else if (total < 25) {
		  var modifier = (50 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC Strong +50%';
	  } else if (total < 27) {
		  var modifier = (100 / 100) * attribute_value;
		  attribute_value = attribute_value + modifier;
		  result = 'PC Very Strong +100%';
	  }

	  if (baseline_value != Number(0) && baseline_value !== null) {
	  	  if (round) {
	  	  	attribute_value = Math.round(attribute_value);
	  	  }
	  }
	  return {
		  "result": result,
		  "value": attribute_value,
		  "dice": {
    		    "rolls": rolls.diceRolls,
		    "total": total
		  }
	  }
	}
}
