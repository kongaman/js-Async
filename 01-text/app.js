document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  //console.log(`READYSTATE: ${xhr.readyState}`);

  // Optional - Used for spinners/loader
  xhr.onprogress = function(){
    console.log(`READYSTATE: ${xhr.readyState}`);
  }

  xhr.onload = function() {
    console.log(`READYSTATE: ${xhr.readyState}`);
    // HTTP Statuses
    // 200: OK
    // 403: Forbidden
    // 404: Not Found
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML =
      `<h1>${this.responseText}</h1>`
    } else {
      
    }
  }

  // xhr.onreadystatechange = function() {
  //   //older way than onload
  //   console.log(`READYSTATE: ${xhr.readyState}`);
  //   if (this.status === 200 && this. readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log(`Request error...`);
  }

  xhr.send()
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response is ready
}