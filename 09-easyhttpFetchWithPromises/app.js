const http = new EasyHttp;

//Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//User data
const data = {
  name : 'John Doe',
  username: 'johndoe',
  email: 'john@gmail.com'
}

//Create User
// const users = http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Update User
// const users = http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Delete User
const users = http.delete('https://jsonplaceholder.typicode.com/users/2')
.then((data) => console.log(data))
.catch(err => console.log(err));