
/*
  https://chat.openai.com/share/98996430-4fc5-4f41-bafb-cec2ef56d44d

*/

// function isSubset(array1, array2) {
//     // Iterate through each element of array1
//     for (let i = 0; i < array1.length; i++) {
//         // Check if the current element of array1 exists in array2
//         if (array2.indexOf(array1[i]) === -1) {
//             // If not found, array1 is not a subset of array2
//             return false;
//         }
//     }
//     // If all elements of array1 are found in array2, array1 is a subset of array2
//     return true;
// }

// // Example arrays
// let array1 = [1, 2, 3];
// let array2 = [0, 1, 2, 3, 4, 5];

// // Check if array1 is a subset of array2
// console.log(isSubset(array1, array2)); // Output: true

//=====================================================================================



// function isSubset(array1, array2) {
//     // Check if every element of array1 exists in array2
//     return array1.every(element => array2.indexOf(element) !== -1);
// }

// // Example arrays
// let array1 = [1, 2, 3];
// let array2 = [0, 1, 2, 3, 4, 5];

// // Check if array1 is a subset of array2
// console.log(isSubset(array1, array2)); // Output: true

//==============================================================================

// function isSubset(array1, array2) {
//     // Iterate through each element of array1
//     for (let i = 0; i < array1.length; i++) {
//         let found = false;
        
//         // Check if the current element of array1 exists in array2
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 found = true;
//                 break;
//             }
//         }
        
//         // If the current element of array1 is not found in array2, return false
//         if (!found) {
//             return false;
//         }
//     }
    
//     // If all elements of array1 are found in array2, return true
//     return true;
// }

// // Example arrays
// let array1 = [1, 2, 3];
// let array2 = [0, 1, 2, 3, 4, 5];

// // Check if array1 is a subset of array2
// console.log(isSubset(array1, array2)); // Output: true

//=========================================================================

// function isSubset(array1, array2) {
//     // Check if every element of array1 exists in array2
//     return array1.every(element => array2.includes(element));
// }

// // Example arrays
// let array1 = [1, 2, 3];
// let array2 = [0, 1, 2, 3, 4, 5];

// // Check if array1 is a subset of array2
// console.log(isSubset(array1, array2)); // Output: true


//============================================================================

// function isSubset(array1, array2) {
//     // Convert arrays to sets for efficient membership testing
//     let set2 = new Set(array2);
    
//     // Iterate through each element of array1
//     for (let i = 0; i < array1.length; i++) {
//         let element = array1[i];
        
//         // Check if the current element exists in set2
//         if (!set2.has(element)) {
//             return false;
//         }
//     }
//     // If all elements of array1 are found in array2, return true
//     return true;
// }

// // Example arrays
// let array1 = [1, 2, 3];
// let array2 = [0, 1, 2, 3, 4, 5];

// // Check if array1 is a subset of array2
// console.log(isSubset(array1, array2)); // Output: true


//===============================================================================


// function isSubset(array1, array2) {
//     // Convert arrays to sets for efficient membership testing
//     let set1 = new Set(array1);
//     let set2 = new Set(array2);
    
//     // Check if set1 is a subset of set2
//     for (let elem of set1) {
//         if (!set2.has(elem)) {
//             return false;
//         }
//     }
//     return true;
// }

// // Example arrays
// let array1 = [1, 2, 3];
// let array2 = [0, 1, 2, 3, 4, 5];

// // Check if array1 is a subset of array2
// console.log(isSubset(array1, array2)); // Output: true


//===============================================================================


// Joney file code

//Array subset of another array.

function isSubset(arr1, arr2, n, m) {

    for (let i = 0; i < m; i++) {
        let index = arr1.indexOf(arr2[i]);
        if (index==-1) {
            return "No";
        }
    }
    return "Yes";
}



// let arr1 = [11, 1, 13, 21, 3, 7];
// let arr2 = [11, 3, 7, 1];
// let n = arr1.length;
// let m = arr2.length;

// let subset = isSubset(arr1, arr2, n, m);
// console.log(subset);


        // Define the data array
        let data = [1, 2, 3, 4, 5, 6];

        // Convert the data array to a string using join() method
        let dataString = data.join(", ");

        // Set the innerHTML of the element with id 'dataDisplay' to the dataString
        document.getElementById('dataDisplay').innerHTML = dataString;