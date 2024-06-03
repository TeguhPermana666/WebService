
/**
 * Based code create http server on HAPI
 // const Hapi = require('@hapi/hapi');
 * const init = async() =>
 * const server = Hapi.server({
 port = 5000,
     host = 'localhost'
 });
     await server.start();
     console.log('server berjalan');
}

Hapi.server() => menerima parameter server options (menampung konfigurasi dari server)
salah satu dari server option adalah port dan host

Proses menjalankan server (server.start()) dilakukan secara async => perlu di jalankan 
di fungsi async dan memanggil server.start() menggunakan await

Setelah server di jalankan dapat melihat alat lengkap dan port server dengan server.info.url

 */

// Latihan membuat HTTP

const Hapi = require('@hapi/hapi');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();