const prod = [
    {id:1,name:'AC',price:1000},
    {id:2,name:'Laptop',price:3000},
    {id:3,name:'Iphone',price:2200},
    {id:4,name:'Printer',price:1800},
    {id:5,name:'LCD',price:1200},
]

const discountedProd = prod.map((products)=>{
    products.price=products.price - (products.price)/10;
    return products;
})

console.log(discountedProd);
console.log(prod.length);

const sumProd = prod.reduce((sum,productss)=>{
    sum = sum + productss.price;
    return sum;
},0);

console.log("Total price is : "+ sumProd);