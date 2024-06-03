// Method request & routing
/**
 * Tidka dilakukan pada request handler namun di lakukan pada object route configuration
 * yang di simpan pada method server.route()
 */

/**
 * Code routing:
 * server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });
request handler di tuliskan di dalam route configuration sehingga tidak usah menggunakan
if else bersarang

server.route() => dapat menerima array dari route configuration sehhingga bisa mendapatkan 
lebih dari satu route configuration
 */
const Hapi = require('@hapi/hapi');
const routes = require('./1_1 Routes');
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
/**
 * Object route configuration memiliki properti yang bisa di manfaatkan untuk mensepsifikasikan
 * route yang di inginkan (method, path, handler (request handler))
 */
