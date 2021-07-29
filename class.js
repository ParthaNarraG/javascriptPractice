/**
 * In JS, Classes were used to define objects.
 * Class define the schema of the object
 */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const newPerson = new Person('Partha', 'Narra');
console.table([newPerson]);

//Both Object.assign and Object.create support deep copy

//You can Create an object using object.create method by using a prototype
//newPerson is a prototype
const add = Object.create(newPerson);

//You can Create an object using object.assign method by using a source and target
add.firstName = "Prem";
add.lastName = "Chinnu"

const sub = Object.assign(add, newPerson);
console.log(add);
console.log(sub);


