// console.log("Hello from the other side.")
//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/


var anarray = [1, 2, 3, 5, 6, 7];
var skipindex;
// Start at index 1, index 0 doesn't have a previous number
for (let i = 1; i < anarray.length; i++){
    // console.log(i, anarray[i])
    if (anarray[i] !== anarray[i-1]+1){
        skipindex = i;
    };
};
console.log(`The skipped number is at index ${skipindex}`);

function firstNonConsecutive(arr){
    //Your code goes here
    i = -1;
    for (let i = 1; i < arr.length; i++){
        // console.log(i, arr[i])
        if (arr[i] !== arr[i-1]+1){
            return i;
        };
    };
    return i;
};

//Call function here with arguments
console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7])); // Should log out 3



//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/
function pos_sums(arr){
    let total = 0;
    for (num of arr){
        if (num > 0){
            total += num;
        };
    };
    return total;
};
// Write arrow function here
let pos_sums2 = arr => {
    let total = 0 
    for (num of arr){
        if (num > 0){
            total += num;
        }
    }
    return total;
}
// Call function here with arguments
console.log(pos_sums([10, 12, -9, 3, -1, 0, 15] ));
console.log(pos_sums([3, 5, 7, 9, -10, 2, -22, -1]  ));

console.log(pos_sums2([10, 12, -9, 3, -1, 0, 15] ));
console.log(pos_sums2([3, 5, 7, 9, -10, 2, -22, -1]  ));
