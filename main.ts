//project=43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that 
//you have one array of the original names and one array with the Great added to each magician’s name.


function showMagicians(magicians: string[]): void {
    // Print the list of magicians
    magicians.forEach(magician => console.log(magician));
}

function makeGreatCopy(magicians: string[]): string[] {
    // Add 'the Great' to each magician's name and return a new array
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

// Original list of magicians
const originalMagicians: string[] = ["razia","hanza","isha"];
console.log("\nOriginal list of magicians:");
showMagicians(originalMagicians);

// Add 'the Great' to each magician's name and store in a new array
const greatMagicians: string[] = makeGreatCopy(originalMagicians);
console.log("\nModified list of magicians with 'the Great':");
showMagicians(greatMagicians);

// Original list of magicians remains unchanged
console.log("\nOriginal list of magicians remains unchanged:");
showMagicians(originalMagicians);