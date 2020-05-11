class Utils {
    constructor() {}

    arrayToSentence(arr) {
        let last = arr.pop()
        return arr.join(', ') + ' and ' + last
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
	
	rollDice(num=1, sides=6, correct_rolls=true){
		var total = 0
		var diceRolls = []
		var numRolled = num
		while (num-- > 0) {
			let dieRoll = this.rollDie(sides, correct_rolls)
			total += dieRoll
			diceRolls.push(dieRoll)
		}
		return {
			'numSides': sides, 
			'numRolled': numRolled,
			'diceRolls': diceRolls,
			'total': total
		}
	}
}

export default Utils