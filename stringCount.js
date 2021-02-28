let nameString="Microsoft Private Limited";
let obj={}
nameString=nameString.split(" ").join("").toLowerCase(); //Remove White spaces and converts all characters to lowercase

for(let i=0;i<nameString.length;i++){
    obj.hasOwnProperty(nameString.charAt(i))?obj[nameString.charAt(i)]++:obj[nameString.charAt(i)]=1
}

console.log(obj);