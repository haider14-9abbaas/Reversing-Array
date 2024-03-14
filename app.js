document.write("JavaScript Connected")

var originalString = "Superman";
var reversedString = "";

for (var i = originalString.length - 1; i >= 0; i--) 
{
    reversedString += originalString[i];
}
console.log(reversedString);
alert(reversedString);
if (originalString === reversedString)
{
    console.log("The string '" + originalString + "' is a palindrome.");
} else {
    console.log("The string '" + originalString + "' is not a palindrome");
}
