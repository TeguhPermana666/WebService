/**
 * Response Header
 * Dapat memberikan respons dengan memberikan data dalam tipe (MIME)
 * XML, JSON, gambar, text.
 * 
 * respons MIME dapat dilakukan dengan lampirkan property 'Content-Type' pada response header
 * terhadap setHeader()
 */
const http = require('http');
const requestListener = (request,response) => {
   response.setHeader('Content-Type', 'application/json'); 
   response.setHeader('Powered-By', 'Node.js');
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
})