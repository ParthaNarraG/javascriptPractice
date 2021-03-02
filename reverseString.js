/**
 * REVERSE A STRING 
 */

 let str="Partha Narra";
 str=str.split("").reverse().join("");   //TO REVERSE A STRING CONVERT IT TO ARRAY AND USE REVERSE METHOD AND JOIN IT AS STRING

 console.log(str);

 //WITHOUT USING AN REVERSE FUNCTION

let rest="Partha Narra";
rest=rest.split("");
let string=""
for(let i=rest.length-1;i>=0;i--){
    string+=rest.pop() 
}
console.log(string);