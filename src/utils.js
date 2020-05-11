export default class Utils {
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
	
	isObject(val) {
    	    return val != null && typeof val === 'object' && Array.isArray(val) === false
	}
	
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }	
}
