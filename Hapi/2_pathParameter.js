/**
 * Path Parameter
 * Mengakses halaman profil dengan mendapatkan nama username nya pada akhir path
 * https://twitter.com/maudyayunda, maudyayunda di ambil dengan path parameter
 * dan di lakukan proses route untuk mengakses halamannya
 */

/**
 * Contoh codenya:
 * server.route({
 *  method : 'GET',
 *  path : '/profile/{username?}',
 *  handler : (request,h) =>{
 *      const {username = 'stranger'} = request.params; // path parameter dengan var username
 *      return `Hello, ${username}`;}
 * })
 */

 const Hapi = require('@hapi/hapi');
 const routes = require('./2_1.Routes');
 const init = async () => {
     const server = Hapi.server({
         port: 5000,
         host: 'localhost'
     });
     // call the route
     server.route(routes);
 
     await server.start();
     console.log(`Server berjalan pada ${server.info.uri}`);
 }
 
 init();