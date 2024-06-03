/**
 * Query parameters : cara lin yang digunakan mengirimkan data melalui URL
 * Query parameters digunakan pada permintaan yang membutuhkan kueri dari client
 * contoh: pencarian dan filter data
 * Memiliki format : key = value
 * contoh : localhost:5000?name=teguh&location=bali
 */

/**
 * Implementation
 * server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
 });
 */

 
const Hapi = require('@hapi/hapi');
const routes = require('./2_2.Routes');
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