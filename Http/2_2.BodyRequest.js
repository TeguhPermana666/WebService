/**
 * BODY REQUEST
 * Data yang disimpan pada body request akan di load oleh method POST & PUT
 * 
 * http.clientRequest adalah turunan dari readable stream sehingga mendapatkan data body sulit di 
 * bandingkan mendapatkan data header
 * - Teknik event emitter pada clientRequest untuk mengirimkan bagian bagian datanya 
 *   - data & end yang digunakan untuk mendapatkan data body
 */

// Contoh bagaimana mendapatkan data body

// const requestListener = (request, response)=>{
//     let body = [];

//     request.on('data', (chunk)=>{
//         body.push(chunk);
//     })

//     request.on('end', ()=>{
//         body = Buffer.concat(body).toString();
//     })
// };

/**
 * Bedah code
 * 1. Deklarasikan variabel body dan inisialisasikan dengan array kosong. 
 * berfungsi untuk menampung buffer pada stream
 * 
 * 2. Event data terjadi pada request, kita isi array body dengan chunk (potongan data)
 * yang dibawa callback function pada event tersebut
 * 
 * 3. Ketika proses tream berakhir, maka event end akan di bangkitkan, sehingga dapat mengubah 
 * variabel body yang sebelumnya menampung buffer menjadi data sebenearnya dalam bentuk string melalui
 * perintah Buffer.concat(body).toString()
 */


// Latihan, mendapatkan data pad abidy request ketika client mengirimkan request POST

