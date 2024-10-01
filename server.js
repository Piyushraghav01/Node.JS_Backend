/* // Creating an http server
// Create a srever using NodeJS.

// 1. Import http library/module
const http = require('http');

// 2. Create Server
const server = http.createServer((req, res) => {
    // Here comes the request.
    res.end('Welcome to Node JS Server');
});

// 3. Specily a port to listen to client's request.
server.listen(3100, () => {
    console.log('Server is listening a port of 3100');
})

// console.log('Server is listening a port of 3100'); */




