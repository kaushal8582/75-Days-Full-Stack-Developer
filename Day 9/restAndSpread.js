let arr =[1,2,3,4,5,6];
let arr2 =[8,7,6];
function add(...num){
    console.log(num);
    let sum =0;
    for(let i of num){
        sum+=i;
    }
    console.log(sum);
}

add(...arr,...arr2);






