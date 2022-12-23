// sum zero
const sum0 = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ( (array[j] + array[i]) === 0) {return true}
            
        };
        return false
    } 
}
console.log(sum0([1,2,3,-1]))

// runtime: o(n^2) SC: O(1)


const hasUniqueChars = str => {
    newStr =str.split('')
        for (let i = 0; i < newStr.length; i++) {
            for (let j = 0; j < newStr.length; j++) {
                if (newStr[j] === newStr[i]) { return false
                    
                }
                return true
        }
    }
}
console.log(hasUniqueChars("Moonday"))

// runtime: o(n^2) SC: O(1)

const isPangram = str => {
    newStr=str.split(' ').join('')
    newStr= newStr.toLowerCase()
   for (let i = 0; i < newStr.length; i++) {
        for (let j = 0; j < newStr.length; j++) {
         if (newStr[j] === newStr[i]) { return false   
         }
        return true
        }
    
    }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//runtime: o(n^2) SC:O(1)


const findLongestWord = array => {
    let highestWord = 0
   for (let i = 0; i < array.length; i++) {
        splitWord = array[i].split('')
        if (splitWord.length > highestWord) { highestWord=splitWord.length}
    }
    return highestWord
}
console.log(findLongestWord(["hi", "hello"]))

//runtime: o(n) SC:O(1)