const numbers = [1,2,3,4,5,6,7,8,9,0]

const  evennum = numbers.map(((num)=>{
    if(num%2==0)
    return num*1;
}))

console.log(evennum)