/**
 * Body / Playoad Request
 * mendapatkan data pada body akan berurusan dengan stream, namun
 * HAPU secara default akan mengubah playload JSOn menjadi object js maka
 * tidak lagi menggunakan JSON.parse()
 * 
 * client -> mengirim playload(body) json -> dapat di akses pada route handles
 * -> melalui request.payload
 * Contoh Penggunaan 
 * server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
}); 
{ "username": "harrypotter", "password": "encryptedpassword" }
 */