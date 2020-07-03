class Utils {
    constructor() {}

    arrayToSentence(arr) {
    		if (arr.length == 1) {
    			return arr[0]
    		} else {
	        let last = arr.pop()
    	    		return arr.join(', ') + ' and ' + last
    	    	}
    }
    
	capitalize(stringToCap) {
    	return stringToCap.charAt(0).toUpperCase() + stringToCap.slice(1)
	}
    
	clamp(num, min, max) {
		return Math.min(Math.max(num, min), max)
	}
	
	d100(){
		return Math.floor(Math.random()*100);
	}	 
    
    getRandom(arr, n=1) {
        let result = new Array(n)
        let len = arr.length
        let taken = new Array(len)
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available")
        while (n--) {
            let x = Math.floor(Math.random() * len)
            result[n] = arr[x in taken ? taken[x] : x]
            taken[x] = --len in taken ? taken[len] : len
        }
        return result
    }
    
    getClosestKey(arr, target, u) {    	 
        if (arr.hasOwnProperty(target)) {
            return target
        }
        let keys = Object.keys(arr)
        keys.sort(function(a,b){ return a-b; })

        for(var i = 0, prev; i < keys.length; i++){
            if (Number(keys[i]) > target) {
                return prev === u ? u : +prev
            }
            prev = keys[i]
        }
        return +keys[i - 1]
    }
    
	getAllIndexes(arr, val) {
		var indexes = [], i;
		for(i = 0; i < arr.length; i++)
			if (arr[i] === val)
				indexes.push(i);
		return indexes;
	}
    
	getKeyByValue(object, value) {
		return Object.keys(object).find(key => object[key] === value)
	}
	
	getClosetRolledMatch(arr,roll) {
        let result = null        
        for (var i = 0; i < arr.length; i++){
            if (roll <= arr[i][0]) {
                result = arr[i][1];
                break;
            }
        }
        return result
    }	
	
	areArraysEqualSets(a1, a2) {
	  let superSet = {};
	  for (let i = 0; i < a1.length; i++) {
	    const e = a1[i] + typeof a1[i];
	    superSet[e] = 1;
	  }

	  for (let i = 0; i < a2.length; i++) {
	    const e = a2[i] + typeof a2[i];
	    if (!superSet[e]) {
	      return false;
	    }
	    superSet[e] = 2;
	  }

	  for (let e in superSet) {
	    if (superSet[e] === 1) {
	      return false;
	    }
	  }

	  return true;
	}	
	
	isObject(val) {
    	    return val != null && typeof val === 'object' && Array.isArray(val) === false
	}
	
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    
    rollDie(sides=6, correct_roll=true) {
		let roll = Math.floor(Math.random() * sides)
		if (correct_roll) {
			return ++roll
		} else { 
			return roll
		}
	}
	
	rollDice(num=1, sides=6, correct_rolls=true, keep="normal"){
		var total = 0
		var diceRolls = []
		
		if (keep == "high" || keep == "low") {
			num = num + 1
		}
		
		var numRolled = num
				
		while (num-- > 0) {
			let dieRoll = this.rollDie(sides, correct_rolls)
			diceRolls.push(dieRoll)
		}
		
		console.log(diceRolls)
		
		if (keep == "high" || keep == "low") {
			if (keep == "high") {
				var highDice = diceRolls.slice(0)
				highDice.sort()
				highDice.reverse()
				highDice.splice(-1,1)
				total = highDice.reduce((a, b) => a + b, 0)
			} else if (keep == "low") {
				var lowDice = diceRolls.slice(0)
				lowDice.sort()
				lowDice.splice(-1,1)
				total = lowDice.reduce((a, b) => a + b, 0)
			}
						
		} else {
			total = diceRolls.reduce((a, b) => a + b, 0)
		}
		
		return {
			'numSides': sides, 
			'numRolled': numRolled,
			'diceRolls': diceRolls,
			'total': total			
		}
	}
	
	table_random_lookup(table, number_of_results=1) {
		let result = this.getRandom(table, number_of_results)
		let raw_result = result
		if (number_of_results == 1) {
			result = result[0]
		} else {			
			result = this.arrayToSentence(result)	
		}
		return {
			"roll": null,
			"raw_result": raw_result,
			"result": result,
			"table": table
		}
	}

	table_d10_lookup(table){
		let roll = this.rollDice(1, 10)
		return {
			"roll": roll.total,
			"result": table[roll.total],
			"table": table
		}
	}
	
	table_d100_lookup(table){
		let roll = this.d100()
		return {
			"roll": roll,
			"result": table[roll],
			"table": table
		}
	}	
}

export default Utils