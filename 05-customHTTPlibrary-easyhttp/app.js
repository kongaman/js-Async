const http = new easyHTTP;

// GET Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
  
// });

//Create data
const data = {
  title: 'custom post',
  body: 'This is a custom post'
};

// POST Request
// http.post('https://jsonplaceholder.typicode.com/posts', data , function(err, post) {
// )  if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// PUT Request (Update)
// http.put('https://jsonplaceholder.typicode.com/posts/1', data , function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// DELETE Posts

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  } 
});