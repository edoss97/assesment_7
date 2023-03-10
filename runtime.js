const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


perf.start()
doublerAppend(tinyArray);
let tinyAppend = perf.stop();


perf.start()
doublerAppend(smallArray);
let smallAppend = perf.stop();


perf.start()
doublerAppend(mediumArray);
let mediumAppend = perf.stop();


perf.start()
doublerAppend(largeArray);
let largeAppend = perf.stop();


perf.start()
doublerAppend(extraLargeArray);
let extraLargeAppend = perf.stop();


perf.start()
doublerInsert(tinyArray);
let tinyInsert = perf.stop();


perf.start()
doublerInsert(smallArray);
let smallInsert = perf.stop();


perf.start()
doublerInsert(mediumArray);
let mediumInsert = perf.stop();


perf.start()
doublerInsert(largeArray);
let largeInsert = perf.stop();


perf.start()
doublerInsert(extraLargeArray);
let extraLargeInsert = perf.stop();

console.log('results for append')
console.log('tinyAppend',tinyAppend.preciseWords);
console.log('smallAppend', smallAppend.preciseWords)
console.log('medAppend', mediumAppend.preciseWords)
console.log('largeAppend', largeAppend.preciseWords)
console.log('xLargeAppend', extraLargeAppend.preciseWords)

console.log('results for insert')
console.log('tinyInsert',tinyInsert.preciseWords)
console.log('smallInsert', smallInsert.preciseWords)
console.log('mediumInsert',mediumInsert.preciseWords)
console.log('largeInsert', largeInsert.preciseWords)
console.log('xlargeInsert', extraLargeInsert.preciseWords)
// console.log('Results for the extraLargeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

