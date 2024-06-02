// Response status

/** 
 * Response : status line (response status), response header, response body
 * 
 * Response status: status dari request.
 * 
 * 100-199 : informational responses.
 * 200 - 299 : successful responses.
 * 300-399 : redirect.
 * 400-499 : client error.
 * 500-599 : server errors.
 */
const http = require('http');
const requestListener = (request, response) =>{
    response.setHeader('Content-Type', 'text/html');

    const {method, url} = request;

    if(url == '/'){
        if(method == 'GET'){
            response.statusCode = 200;
            response.end('<h1> Ini adalah homepage </h1>');
        }else{
            response.statusCode = 400;
            response.end('<h1> Halaman tidak dapat diakses dengan ' + method + ' request </h1>');
        }
    }else if(url == '/about'){
        if (method == 'GET'){
            response.statusCode = 200;
            response.end('<h1> Halo! Ini adalah halaman about </h1>');
        }else if(method == "POST"){
            let body = [];

            request.on('data', (chunk) =>{
                body.push(chunk);
            });
            
            request.on('end', () =>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1> Halo, ${name}! Ini adalah halaman about </h1>`);
            })
        }else{
            response.statusCode = 400;
            response.end(`<h1> Halaman tidak dapat diakses dengan ${method} request </h1>`);
        }
    }else{
        response.statusCode = 404;
        response.end('<h1> Halaman tidak ditemukan </h1>');
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
})

/**
 * Output
 * curl -X GET http://localhost:5000/about -i
 * => HTTP/1.1 200 OK
 * 
 * curl -X GET http://localhost:5000/test -i
 * => HTTP/1.1 404 Not Found
 * 
 * curl -X DELETE http://localhost:5000/ -i
 * => HTTP/1.1 400 Bad Request
 */