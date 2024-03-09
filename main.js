//project=43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that 
//you have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians(magicians) {
    // Print the list of magicians
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreatCopy(magicians) {
    // Add 'the Great' to each magician's name and return a new array
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
// Original list of magicians
var originalMagicians = ["razia", "hanza", "isha"];
console.log("\nOriginal list of magicians:");
showMagicians(originalMagicians);
// Add 'the Great' to each magician's name and store in a new array
var greatMagicians = makeGreatCopy(originalMagicians);
console.log("\nModified list of magicians with 'the Great':");
showMagicians(greatMagicians);
// Original list of magicians remains unchanged
console.log("\nOriginal list of magicians remains unchanged:");
showMagicians(originalMagicians);
