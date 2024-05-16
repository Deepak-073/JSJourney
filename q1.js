const prods = [
    {id:1,name:'phone',price:150},
    {id:2,name:'wifi',price:120},
    {id:3,name:'ups',price:50},
    {id:4,name:'laptop',price:250},
    {id:5,name:'keyboard',price:80},
]

const changedProd = prods.filter((products)=>{
        return products.price <200;  
}
)

console.log(changedProd);



//------------------------------------------------------------------------

const products = [
    {id:1,name:'phone',price:150},
    {id:2,name:'wifi',price:120},
    {id:3,name:'ups',price:50},
    {id:4,name:'laptop',price:250},
    {id:5,name:'keyboard',price:80},
]

const filteredProducts = products.filter((product)=>{
        return product.price <200;  
}
)

console.log(filteredProducts);