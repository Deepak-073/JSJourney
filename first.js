function ftry() {
    return "Yo";
}

console.log(ftry());

function add(a,b) {
    return a+b;
}

const sum= add("hello ","world");

console.log(sum);

function findindex(array, target) {
     for (var i=0; i<array.length;i++)
     {
        if(array[i]==target)
        return i;
     }
     return "no luck";
}

const finda= findindex([1,2,4,6,7,8,5,9],8);
const findb= findindex([1,2,4,6,7,8,5,9],11);

console.log(finda);
console.log(findb);

function evenornot(num){
 if(num%2==0)
 return 'even';
 else
 return 'odd';
}

console.log(evenornot(4));
