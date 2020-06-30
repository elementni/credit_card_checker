// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const invalidCardsArray = [];
const cardCoArray = [];


function validateCred(array) {
    
    // doubledNumber variable stores the value of the [i] element doubled
    let doubledNumber;
    // checkArray is set to the array created in the buildArray function
    const checkArray = buildArray(array);

    for (let i = checkArray.length - 2; i >= 0; i -= 2) {
        doubledNumber = checkArray[i] * 2;
        doubledNumber > 9 ? checkArray[i] = doubledNumber - 9 : checkArray[i] = doubledNumber;

    }
    
    // This reduces the array to one value then checks its mod 10
    const sumOfNumbers = checkArray.reduce((acc, val) => acc + val);
    return sumOfNumbers % 10 === 0 ? true : false; 
    
}

// This function creates a new array to use in the validateCred function. This is so that the validateCred array doesn't actually modify the input array itself, but only the newly created array to then run the Luhn algorithm
const buildArray = (array) => {

    const newArray = [];
    
    for (let k = 0; k < array.length; k++) {
        newArray.push(array[k]);
    }

    return newArray;
}

function findInvalidCards(nestedArray) { 
    
    for (let j = 0; j < nestedArray.length; j++) {
        console.log(`batch element ${j} validity is ${validateCred(nestedArray[j])}`);
        validateCred(nestedArray[j]) === false ? invalidCardsArray.push(nestedArray[j]) : null;
    }
}

function invalidCardCompanies(nestedArray) {

    
    
    for (let m = 0; m < nestedArray.length; m++) {
        
        switch (nestedArray[m][0]) {
            case 3: 
            let countAmex = 0;
            for (let n = 0; n < cardCoArray.length; n++) 
            { if (cardCoArray[n] === 'Amex') {countAmex++};}
            countAmex === 0 ? cardCoArray.push('Amex') : null;
            break;

            case 4:
            let countVisa = 0;
            for (let o = 0; o < cardCoArray.length; o++) 
            { if (cardCoArray[o] === 'Visa') {countVisa++};}
            countVisa === 0 ? cardCoArray.push('Visa') : null;
            break;

            case 5:
            let countMastercard = 0;
            for (let p = 0; p < cardCoArray.length; p++) 
            { if (cardCoArray[p] === 'Mastercard') {countMastercard++};}
            countMastercard === 0 ? cardCoArray.push('Mastercard') : null;
            break;

            case 6:
            let countDiscover = 0;
            for (let q = 0; q < cardCoArray.length; q++) 
            { if (cardCoArray[q] === 'Discover') {countDiscover++};}
            countDiscover === 0 ? cardCoArray.push('Discover') : null;
            break;

            default: console.log(`Company not found for card with number ${nestedArray[m]}`)
            break;
        }
    }
}













