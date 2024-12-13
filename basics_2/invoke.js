// immeediately invoked function expression
(function chai(){
    console.log(`DB CONNECTED`);
})();
// use semicolon to use two IIFE simultaneously 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Aayush`)
// name is used to give parameters
