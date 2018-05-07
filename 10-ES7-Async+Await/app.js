// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; // Wait until the promise is resolved
//     return res;
//   } else {
//     await  Promise.reject(new Error('Somethng went wrong'));
//   }

  
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers() {
  //await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //Only Preceed once its resolved
  const data = await response.json();
  //only preceed once second promise is resolved
  return data
}

getUsers().then(users => console.log(users));