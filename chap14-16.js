// 1. Declare an empty array using JS literal notation to store student names in future:
var studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future:
var studentNamesObject = new Array();

// 3. Declare and initialize a strings array:
var stringArray = ["Ali", "Hamza", "Ahmed", "Rayyan"];

// 4. Declare and initialize a numbers array:
var numbersArray = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array:
var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array:
var mixedArray = ["Ali", 25, true, null, undefined];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// 8 
var studentNames = ["Rayyan", "Ashraf", "Abbasi"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  console.log("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");
}

// 9
var colors = ["Red", "Green", "Blue"];
console.log("Initial Colors: " + colors);

// a. Add color to beginning
var colorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorStart);
console.log("After adding at beginning: " + colors);

// b. Add color to end
var colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
console.log("After adding at end: " + colors);

// c. Add two more colors to beginning
colors.unshift("Purple", "Orange");
console.log("After adding two colors at beginning: " + colors);

// d. Delete the first color
colors.shift();
console.log("After deleting first color: " + colors);

// e. Delete the last color
colors.pop();
console.log("After deleting last color: " + colors);

// f. Add color at specific index
var indexAdd = prompt("Enter index to add color:");
var colorNameAdd = prompt("Enter color name to add:");
colors.splice(indexAdd, 0, colorNameAdd);
console.log("After adding color at index " + indexAdd + ": " + colors);

// g. Delete color(s) from specific index
var indexDelete = prompt("Enter index to delete color(s):");
var countDelete = prompt("How many colors to delete?");
colors.splice(indexDelete, countDelete);
console.log("After deleting color(s) from index " + indexDelete + ": " + colors);

// 10
var scores = [320, 230, 480, 120];
console.log("Scores of Students: " + scores);

scores.sort(function(a, b) {
  return a - b;
});

console.log("Ordered Scores of Students: " + scores);


// 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4); // Gets Islamabad, Quetta

console.log("Cities list: " + cities);
console.log("Selected cities list: " + selectedCities);

// 12
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");

console.log(singleString); // Output: This is my cat

// 13
// Creating an empty array (queue)
var queue = [];

// Adding elements one by one (FIFO - First In)
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

console.log("Queue contents:");
console.log(queue);

// Accessing values in FIFO order (First In First Out)
console.log("Accessing values in FIFO order:");
console.log(queue.shift()); // Keyboard
console.log(queue.shift()); // Mouse
console.log(queue.shift()); // Printer
console.log(queue.shift()); // Monitor
