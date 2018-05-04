const  posts = [
  {title: 'Post One', body: 'This is post 1'},
  {title: 'Post Two', body: 'This is post 2'}
];

// Problem --> es werden nur Post 1 und 2 angezeigt, da es wg Timeout 2 sec dauert den post
// erstellen, aber nur 1 sek die Posts abzuholen
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post 3'});

// getPosts();

// Mit callback function
// durch verwendung von getPosts als callback-Funktion für createPosts funktionierts
// dann, aber so 100% verstanden hab ichs noch nicht, vor allem nicht wie das im
// Echtfall aussehen soll???
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts(){
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post 3'}, getPosts);

