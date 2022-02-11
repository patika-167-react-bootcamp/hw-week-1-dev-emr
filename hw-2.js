const arr = ["bootcamp", "BoOtCaMp"] // Array made for test purposes

Array.prototype.includesCI = function (input) {
  if (typeof input === "string") { // This checks if the user input is string 
    for (let i=0;i<this.length;i++) { // This line creates a loop and iterates every member of the array 
        if (this[i].toUpperCase() === input.toUpperCase()) return true; // The loop converts each member and the input to all caps and checks if they are the same
        else return false;
    }
} else {
    console.log("Please enter a string."); // The function prompts user to enter a string
}
}

// Test inputs
console.log(arr.includesCI("emre")); // Expected to be false 
console.log(arr.includesCI("bootcamp")); // Expected to be true
console.log(arr.includesCI("bOOTCAMP")); // Expected to be true
console.log(arr.includesCI("BOOTCAMp")); // Expected to be true
console.log(arr.includesCI("EMRE")); // Expected to be false
console.log(arr.includesCI(5)); // Expected to tell the user to enter a string value