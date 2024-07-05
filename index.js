const ratings = [6, 7, 8, 9, 10];

const sampleTwo = [true, false];

const sampleThree = [undefined, null];

const sampleFour = [
    {
        name: 'John Doe',
        email: 'john.doe@gmail.com'
    },
    {
        name: 'Sam Smith',
        email: 'sam.smith@gmail.com'
    },
    {
        name: 'Mary Jane',
        email: 'may.jane@gmail.com'
    }
];

const sampleFive = [1, null, true, undefined, { job: 'Software Engineer' }, [234, 567]];

const numberOfLoops = ratings.length;

// FOR loop
for(let ratingIndex = 0; ratingIndex < numberOfLoops; ratingIndex++) {
    if(ratings[ratingIndex] < 5) {
        //console.log("POOR RATING");
    } else {
        //console.log("GOOD RATING");
    }
}

for(let i = numberOfLoops; i >= 0; i--) {
    
}

// WHILE loop
let start = 0;

while(start < ratings.length) {
    if(ratings[start] < 5) {
        //console.log("POOR RATING IN THE WHILE LOOP");
    } else {
        //console.log("GOOD RATING IN THE WHILE LOOP");
    }

    start++;
}
// FOR...IN loop
// Returns the indices
for(let i in ratings) {
    console.log(i);
}

// FOR...OF loop
// Returns the actual values
for(let j of ratings) {
    console.log(j);
}


// FOREACH loop
ratings.forEach(function(rating) {
    if(rating % 2 == 0) {
        console.log(`RATING IN FOREACH METHOD ${rating}`);
    }
});

// MAP loop
const foundValues = ratings.map((item) => {
    if(item == 6 || item == 8) return item;
});

console.log(ratings, foundValues);


// HIGH-ORDER ARRAY methods
// map(), foreach(), some(), every()