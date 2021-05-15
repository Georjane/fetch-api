const fetch = require("node-fetch");

fetch('http://localhost:8080/jane',{
  method:'POST',
  headers:{
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({'jane': 'genius'})
  })
  .then(response => response.json())
  .then(data => console.log(data));

  // fetch('/savecheckbox',{
  //   method:'POST',
  //   headers:{
  //   'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(newCheckboxValuesObj)
  //   })
  //   // .then(res=>res.json())
  //   // .then(data=>console.log(data));