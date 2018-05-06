// const sayHello = function() {
//     console.log('hello');
// }

// const sayHello = () => {
//     console.log('hello');
// }

//One Line function does not need braces
// const sayHello = () => console.log('hello');

//sayHello();

//One line returns
// const sayHello = () => 'hello';
// =
// const sayHello = function(){
//     return 'hello';
// }

//Return Object
// const sayHello = () => ({msg: 'hello'});
//console.log(sayHello());

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// More than one param need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Brad', 'Traversy');

const users =['Donald', 'William', 'Mark'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// })

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);


console.log(nameLengths);