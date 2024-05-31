/**
 * HTTP Server => digunakan untuk interaksi dengan berdasarkan protokol http
 * 
 */

const http = require('http');

// http.createServer() => membuat http server yang merupakan instance dari http.server
/**
 * Method http.server Menerima satu parameter custom callback yang digunakan sebagai request listener. 
 */

const requestListener = (request, response) => {
    // Request => menyimpan informasi permintaan HTTP dari client
        // diakses => alamat, data, http method
    // Response => menanggapi permintaan
        // menentukan => data, format dokumen, kode status (response code)
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end(`<h1>Hello World!</h1>`);
};

const server = http.createServer(requestListener);

/**Method Listen() : * Membuat http server selalu standby untuk menagani permintaan yang masuk dari client
 * Method listen() dapat menerima 4 parameter:
 * 1. Port (number) : jalur yang di gunakan untuk mengakses HTTP server
 * 2. hostname(string): nama domain yang digunakan oleh HTTP server
 * 3. backlog(number): maksimal koneksi yang dapat ditunda(pending) pada HTTP server
 * 4. listeningListener(): callback yang terpanggil ketika HTTP server sedang bekerja (listening)
 */
const port = 5000;
const host = 'localhost';

server.listen(port, host, ()=>{ //listenListener() => callback
    console.log(`Server berjalan pada http://${host}:${port}`);
})

// Request (CMD): curl -X GET http://localhost:5000/
/**
 * curl : command line utility untuk mentransfer data dari atau ke server menggunakan berbagai protokol (HTTP, HTTPS, FTP, dll)
 * - X GET: -X : digunakan untuk menentukan metode HTTP yang digunakan (GET, POST, PUT, PATCH, DELETE)
 * http://localhost:5000/: Alamat server
 */