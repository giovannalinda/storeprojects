const express = require('express');

const server = express();

// Read
server.get('/projects', (req, res) => { 
  return res.json({ message: 'Hello World'});
})

// Create
server.post('/projects', (req, res) => {

});


server.listen(3000);