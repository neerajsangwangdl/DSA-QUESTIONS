// Neeraj 
// Search the element by the index no.

function getElement(dataTraversing,el){

    if(el<=dataTraversing.length){
        console.warn(dataTraversing[el]);
    }else{
        console.warn("The element is not in the array")

    }
}

const dataTraversing = [1,2,3,4,5,6,7,8]
const el = 4
getElement(dataTraversing,4)

console.log("Neeraj")

const second = [33,44,55,66,77]
const elb = 3
getElement(second,elb)

//=============================================

let arr = [22,33,44,55,66,77]
let arrResult = arr.length

let result = arr.includes(22)
console.log(result)