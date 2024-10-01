/* // Creating an http server-1
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

/* // Handling Multiple Requests-2
// Create a srever using NodeJS.

// 1. Import http library/module
const http = require('http');

// 2. Create Server
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('Welcome to my Application');
    if(req.url=="/product"){
        // respone ends // using return keyword
         res.end('This is Product Page');
    }else if(req.url=="/user"){
        res.end('This is User Page');
    }
    // Here comes the request.
    res.end('Welcome to Node JS Server');
});

// 3. Specily a port to listen to client's request.
server.listen(3100, () => {
    console.log('Server is listening a port of 3100');
})

// console.log('Server is listening a port of 3100'); */





