const http = require('http');
const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! test \n'
  res.end(msg);
});

app.listen('9000','0.0.0.0',()=>{
      console.log("server is listening on 9000 port");
});
