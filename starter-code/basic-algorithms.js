// Names and Input
var hacker1 = "Rocio";
console.log ("The driver's name is " + hacker1);

var hacker2 = prompt ("What is your name?");
console.log ("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log ("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (hacker1.length < hacker2.length) {
  console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
}
else {
  console.log ("Wow, you both got equaly long names, " + hacker1.length + " characters!!");
}


// Loops
var driverName = "";
for (var i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log (driverName.trim());

var navigatorName = "";
for (var i = hacker2.length-1; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log (navigatorName);

if (hacker1 < hacker2) {
  console.log ("The driver's name goes first");
}
else if (hacker1 > hacker2) {
  console.log ("Yo, the navigator goes first definitely");
}
else {
  console.log ("What?! You both got the same name?");
}


// Bonus time!
var cadena = prompt("Insert a new string: ");
var palindromo = true;
var cadenaSinEspacios = "";
var abecedario = "abcdefghijklmnopqrstuvwxyz";
var j = 0;

for (var i = 0; i < cadena.length; i++) {
  if (abecedario.includes(cadena[i].toLowerCase())) {
    cadenaSinEspacios += cadena[i].toLowerCase();
    j++;
  }
}

for (var i = 0, j = cadenaSinEspacios.length - 1; i < cadenaSinEspacios.length, j >= 0; i++, j--) {
  if (cadenaSinEspacios[i] != cadenaSinEspacios[j]) {
    palindromo = false;
    break;
  }
}

if (palindromo) {
  console.log("The string inserted: " + cadena + " is a palindrome");
}
else {
  console.log("The string inserted: " + cadena + " is not a palindrome");
}

// Lorem ipsum generator
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar urna sed est pretium, ut semper turpis sollicitudin. Vestibulum scelerisque eu leo at interdum. Nunc sed porta lacus. Vivamus in diam sapien. Ut iaculis blandit sagittis. Phasellus in purus mattis dolor cursus tempor finibus eu dui. Quisque aliquam vulputate rutrum. Maecenas ultricies ultricies dolor eget blandit. Pellentesque nec quam id odio sollicitudin ornare non a ipsum. Nullam quis dolor justo. Praesent nulla eros, ornare id erat vitae, condimentum elementum urna. Nam ultrices accumsan bibendum. ";
loremIpsum += "Aenean commodo massa a sapien rhoncus consectetur. Donec dui lectus, lobortis eu finibus et, dictum eget tellus. Sed a vulputate ante. Ut ac lacinia nibh. Ut mattis a mauris at consectetur. Suspendisse bibendum, augue sit amet interdum sollicitudin, enim metus dapibus nisi, vitae condimentum enim erat at lacus. Donec aliquet fringilla lectus, in mollis orci porta id. Phasellus convallis est venenatis, fermentum sem et, egestas est. Donec egestas porta tristique. Morbi pellentesque sed velit sit amet condimentum. ";
loremIpsum += "Praesent id tellus sit amet leo facilisis ultricies. Sed molestie auctor eleifend. Nulla facilisi. Nam non ultrices nisl. Donec id libero non eros vestibulum commodo. Phasellus ut risus in nibh venenatis auctor. Donec et enim id magna cursus elementum. Aliquam vitae urna eget est maximus maximus viverra at diam. Sed tempus euismod tellus vel vehicula. Curabitur finibus et nisl eget rutrum. Nullam eleifend pharetra libero et rhoncus. Sed mattis in felis ac cursus. Praesent elementum lectus ac risus commodo blandit. Morbi feugiat pretium sapien, vitae elementum justo placerat sit amet. Mauris interdum, nibh vel laoreet malesuada, orci lectus facilisis dui, ac interdum lacus erat hendrerit justo. Maecenas fermentum bibendum nulla sit amet bibendum. ";

var count = 0;
for (var i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] == " "){
    count++;
  }
}

console.log ("The number of words in the text is: " + count);

var etNumber = 0;
var pos;

while (true) {
  pos = loremIpsum.indexOf(" et");
  if (pos != -1) {
    if (loremIpsum[pos+3] == " " || loremIpsum[pos+3] == ",") {
      etNumber++;
    }
    loremIpsum = loremIpsum.slice(pos+1, loremIpsum.length);
  }
  else {
    break;
  }
}
console.log("The number of times 'et' appears is: " + etNumber);
