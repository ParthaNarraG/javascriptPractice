let a=[1,2,4,9,10,67,34,45,39,28,3,4,5,6,7,8,1,2,34]
let b=[]
a.map((ele,index)=>{
  if(index%3 ===0  &&  index!==0 && index%2!==0){
    if(index % 3===undefined && index+1===undefined && index+2===undefined){
      console.log(a)
    }
    else{
        b[0]=a[index]
        b[1]=a[index+1]
        b[2]=a[index+2]
        b.sort((a,b)=>{
          return a-b;
        });
        console.log(b);
        a[index]=b[0]
        a[index+1]=b[1]
        a[index+2]=b[2]
    }
  }
})
console.log(a)

