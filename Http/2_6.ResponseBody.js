/**
 * Response Body
 * Informasi pada header hanya sebagai metada atau informasi yang menjelaskan data utama
 * Pada body terdapat data utama
 * 
 * Object response yang berada pada parameter fungsi requestListener adalah instance
 * dari http.serverResponse, sebagai Writable Stream (response.write()) 
 * yang di akhiri response.end() 
 */

// const requestListener = (request, response) => {
// //     response.write('<html>');
// //     response.write('<body>');
// //     response.write('<h1>Hello World!</h1>');
// //     response.write('</body>');
// //     response.end('</html>');
// //     response.end(); // Menulis data terakhir sebelum proess berhenti

// // code diatas dapat di persingkat menjadi

//     response.end('<html><body><h1>Hello World!</h1></body></html>');
// }
const http = require('http');
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json'); 
    response.setHeader('Powered-By', 'Node.js');

    const {method, url} = request;

    if(url == '/'){
        if(method == 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({message: 'Ini adalah homepage'}));
        }else{
            response.statusCode = 400; // Bad Request
            response.end(JSON.stringify({
            message: 'Halaman tidak dapat diakses dengan ' + method + ' request'
            }));
        }
    }else if(url == '/about'){
        if(method == 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about'
            }));
        }else if (method == 'POST'){
            let body = [];
            response.statusCode = 200;
            response.on('data', (chunk) =>{
                body.push(chunk);
            })
            response.on('end', ()=>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`
                }))
            })

        }
    }else{
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan'
        }));
    }
}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
})

/**
 * 
 * Output:
 * curl -X GET http://localhost:5000/
// output: {"message":"Ini adalah homepage"}

* curl -X GET http://localhost:5000/about
// output: {"message":"Halo! ini adalah halaman about"}
 
* curl -X DELETE http://localhost:5000/
// output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}
 */