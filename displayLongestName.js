//      https://chat.openai.com/share/b023d538-f989-4716-ab41-36600151725c


function findLongestName(arr) {
    let longestName = "";
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > arr.length) {
            longestName = arr[i];
        }
    }
    
    return longestName;
}

// Example usage:
const arr = ["John", "Alice", "Eleanor", "Christopher", "Elizabeth"];
const longestName = findLongestName(arr);
console.log("Longest name:", longestName);

/////////////////////////////////////////////////////////////////

function findLongestName(names) {
    return names.reduce((longestName, currentName) => {
        return currentName.length > longestName.length ? currentName : longestName;
    }, "");
}

// Example usage:
const namesArray = ["John", "Alice", "Eleanor", "Christopher", "Elizabeth"];
const longestNameb = findLongestName(namesArray);
console.log("Longest name:", longestNameb);


//===========================================================================


function findLongestName(names) {
    return names.sort((a, b) => b.length - a.length)[0];
}

// Example usage:
const namesArrayb = ["John", "Alice", "Eleanor", "Christopher", "Elizabeth"];
const longestNamec = findLongestName(namesArrayb);
console.log("Longest name:", longestNamec);
