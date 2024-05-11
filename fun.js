function callb(arr,callback){
    for(let i=0;i<arr.length;i++)
    {
        callback(arr[i]);
    }
}

function a1(value){
    console.log(value);

}

const arr1= [1,'two','three',4,5];

callb(arr1,a1);


function a(x){

    return function(y){
        return x+y;
    }
}

console.log(a(6)(9));