document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
  .then(function(response){
    console.log(response);
  })
}


// Get local json data
function getJson() {
  
}


// Get from external API
function getExternal() {
 
}