// Web 2 - Dice Lab Exercise

var fName = prompt("Please enter your first name:", "");

// Validate that first name was entered
while(fName == "") {
	fName = prompt("Reminder: Please enter your first name:", "");
}

var numDice = prompt("How many dice would you like to roll?", "");

// Validate number of dice entered
while ((parseFloat(numDice) != parseInt(numDice)) || isNaN(numDice) || numDice <= 0) {
	numDice = prompt("Reminder: How many dice would you like to roll? \nNumber should be a positive integer.", "");
}

//numDice = eval(numDice);   // this isn't actually necessary...

var total = 0;

document.write("Rolling " + numDice);

var dieWord = "dice";
if (numDice == 1) {
	dieWord = "die";
}

document.write(" " + dieWord + "...<br>Hey " + fName + ", you rolled a ");

// Produce a die roll between 1 and 6, display it via an alert, add it to a running
// total, build message with dice values and running total and display in the web page
// as the message is being built.
for(var i = 1; i <= numDice; i++) {

   // Remember, JavaScript counts from zero
   dieVal = Math.ceil(6 * Math.random());   // Math.floor() truncates down to an integer

   alert("Dice #" + i + " is a " + dieVal);

   if (i != numDice || i == 1) {

      if (numDice <= 2) {    // Don't display comma if there are only one or two dice being rolled
         document.write(dieVal + " ");
      }
      else {
         document.write(dieVal + ", ");
      }
   }
   else {
      document.write("and " + dieVal + " ");
   }

/* 
   Alternative way of coding the above if structure

   if (i == numDice && i == 1) {
      document.write(dieVal + " ");
   }
   else if (i == numDice) {
      document.write("and " + dieVal + " ");
   }
   else {

      if (numDice == 2) {
         document.write(dieVal + " ");
      }
      else {
         document.write(dieVal + ", ");
      }
   }
*/

   total = total + dieVal;
}  // end for each die

document.write("for a grand total of " + total + "<br><br>");