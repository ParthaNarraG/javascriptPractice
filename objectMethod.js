const obj={
    appId:'1',
    officeLevelId:"1",
    samp(){
        console.log("Hi")
    }
  }

//Assign method copies the properties of one object to another object
Object.assign(target,source)  

//Create method used to create an object based on the prototype of already existing object
const obj2=Object.create(obj)

//remove key from an object using delete operator
delete obj.officeLevelId;

//Entries method converts a key value pair to an array
Object.entries(obj)
console.log(Object.entries(obj))

//To find how many keys does an object contains
Object.keys(obj).length

//Freeze Method stops all the operations for that object , you can't update or create or delete a key
Object.freeze(obj)

//Values Method returns all the values of an object in the form of an array
Object.values(obj)

//Seal Method stops all the operations for that object , you can't create or delete a key, but you can update the value
Object.seal(obj)

//isFrozen Method determines whether an object is frozen or not
Object.isFrozen(obj)

//isSealed Method determines whether an object is sealed or not
Object.isSealed(obj)

//PreventExtensions method stops adding new properties to an object, howevey you can still delete or update it's value
Object.preventExtensions(obj)

//isExtensible method determines whether an object is Extensible or not 
//(Extensible means having the abilty to add new Properties to an Object)
Object.isExtensible(obj)

//is method determines whether two values are same or not
Object.is("val1","val2")