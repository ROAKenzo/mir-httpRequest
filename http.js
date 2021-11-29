const https = require('https');

https.get('https://jsonplaceholder.typicode.com/todos', (resp) => {
  let json = '';

  resp.on('data', (data) => {
    json += data;
  }).on('end', () => {
    JSON.parse(json).map(({userId,id,title,completed})=>{
       console.log( `    ${title} (${completed ? "completed" : "no completed"})
      -id: ${id}
      -userId: ${userId} 
      `)
    });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});