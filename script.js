//your JS code here. If required.
// get the element with id "level"
const levelElement = document.getElementById("level");

// get the number of parent elements of the level element
const parentCount = levelElement.parentsUntil("body").length;

// display the result in an alert box
alert("The level of the element is: " + (parentCount + 1));
