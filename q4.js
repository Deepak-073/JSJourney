const rectangles = [
    {w:10,h:12},
    {w:15,h:55},
    {w:12,h:30},
    {w:20,h:22},
    {w:35,h:20},
]

const area = rectangles.map((rect)=>{
    return rect.h*rect.w;
})

console.log(area);

const totalArea = rectangles.reduce((sum,rect)=>{
    sum = sum + rect.h*rect.w;
    return sum;
},0);

console.log(totalArea);
