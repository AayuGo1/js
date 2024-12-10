// singleton

// object literal
// Object.create 

const mysym = Symbol("key1") //declaring a symbol



const Jsuser = {
    name: "aayush",
    "fullname":"aayush goel",
    [mysym]:"mykey1",
    age:18,
    email:"aayushgoogle.com",
    isLoggedIn: false,
    lastlogindays:["monday","saturday"]
}
// accessing the elements of the object created
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["fullname"]);
console.log(Jsuser[mysym]);
console.log(typeof(mysym));

// to change the values
Jsuser.email="aayush@hhahahah"
// freeze to not change

Jsuser.email="hahahh@gmail"
console.log(Jsuser);





