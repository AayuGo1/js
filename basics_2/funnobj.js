function calculatecartprice(...num1){
    return num1
}
// console.log(calculatecartprice(200,400,600));
// // ... is rest operator and this is used to pass multiple values   
const user = {
    username: "aayush",
    price: 400
}

function handleobject(anyobject) {
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
     }

     handleobject({
        username:"Sam",
        price:1000
    } )

    const mynewarray=[2000,4000,500]
    function returnsecondvalue(getarray){
    return getarray[2]
    }
// console.log(returnsecondvalue(mynewarray));
   console.log(returnsecondvalue([2000,4000,50])); //can pass array directly



