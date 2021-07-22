let a=[10,20,360,45,89,25,0,40,50];
let isSwapped=false;
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-i;j++){
        if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
            isSwapped=true;
        }
    }
    if(!isSwapped){
        break;
    }
}
console.log(a);