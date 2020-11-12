var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

var dollarsToYen = value => {
 
return euroToYen(dollarToEuro(value))

}
console.log(dollarsToYen(137))
