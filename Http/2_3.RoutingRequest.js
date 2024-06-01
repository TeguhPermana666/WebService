/**
 * Routing Request
 * ROuting => istilah dalam menentukan respons server berdasarkan path atau url yang diminta
 * contoh => teguh.com/about => menampilkan halaman about
 * contoh => teguh.com/ => menampilkan halaman home
 */

// http.clientRequest dalam mendapatkan nilai URL
const urlListener = (request, response) =>{
    //mengembalikan path secara lengkap tanpa host dan port server
    const {url} = request; // Get URL dengan object destructuring

    if (url == '/'){
        response.end('<h1>Hello World!</h1>')
    }
}
/**
 * Latihan Routing Request :
URL: ‘/’
    Method: GET
        Mengembalikan “Ini adalah homepage”.
    Method: <any> (selain GET)
        Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.

URL: ‘/about’
    Method: GET
        Mengembalikan “Halo! Ini adalah halaman about”.
    Method: POST (dengan melampirkan data name pada body)
        Mengembalikan “Halo, <name>! Ini adalah halaman about”.
    Method: <any> (selain GET dan POST)
        Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.

URL: <any> (selain / dan /about)
    Method: <any>
        Mengembalikan “Halaman tidak ditemukan!”.
 */

const http = require('http');
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method, url} = request;

    // Logika routing url

    if(url == '/'){
        if(method == 'GET'){
            response.end(`<h1> Ini adalah homepage </h1>`);
        }
        else{
            response.end(`<h1> Halaman tidak dapat diakses dengan ${method} request </h1>`);
        }
    }
    else if (url == '/about'){
        if(method == 'GET'){
            response.end(`<h1> Halo! Ini adalah halaman about </h1>`);
        }else if(method == 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () =>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1> Halo, ${name}! Ini adalah halaman about </h1>`);
            });
        }else{
            response.end(`<h1> Halaman tidak dapat diakses dengan ${method} request </h1>`);
        }
    }

}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port,host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
})

/**
 * curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>

curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>

curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>

curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>
 */