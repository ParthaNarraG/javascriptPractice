let color="0123456789ABCDEF"
let colors=color.split('')
let randomColor;
  const getColor= ()=>
      new Array(6).fill(' ').map(()=>
          randomColor =colors[Math.floor(Math.random() * colors.length)]).join("");

console.log(getColor())
