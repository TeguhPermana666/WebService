/**
 * Response Toolkit
 * -> Fungsi handler pada HAPI memiliki 2 parameter : request dan h
 * -> h => object toolkit yang digunakan untuk mempermudah manipulasi response
 * return : bentuk teks, teks HTML, JSON, steam, atau bahkan promise. 
 * Contoh Penggunaan:
 * server.route({
 method: 'POST',
 path: '/user',
 handler: (request, h) => {
     return h.response('created').code(201);
    },
});
 * dapat juga menetapkan header response, content type, content length
 * Contoh Penggunaan:
 * // Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('Custom-Header', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('Custom-Header', 'some-value');
};
 */