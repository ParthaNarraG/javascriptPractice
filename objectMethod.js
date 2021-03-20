const obj={
    appId:'1',
    officeLevelId:"1",
  }
  
//remove key from an object using delete operator
delete obj.officeLevelId;

//To find how many keys does an object contains
Object.keys(obj).length

//Freeze Method stops all the operations for that object , you can't update or create or delete a key
Object.freeze(obj)
