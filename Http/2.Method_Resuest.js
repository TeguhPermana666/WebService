// Method Request

/** -X : digunakan untuk menentukan metode HTTP yang digunakan (GET, POST, PUT, PATCH, DELETE)
 * curl -X POST http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X PUT http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X DELETE http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X GET http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
 * 
 */

/**
 * Fungsi request listener menyediakan dua parameter
 * - request => menyediakan informasi permintaan HTTP dari client
 * - response => mengganti permintaan
 */


// Mendapatkan nilai method => request.method

// const requestListener = (request, response) => {
//     const method = request.method;
// }

// Atau bisa menggunakan object destructuring

// const requestListener = (request, response) => {
//     const {method} = request;
// }

const requestListener = (request, response) =>{
    const {method} = request;

    if (method == 'GET'){
        // Response Get
    }
    if(method == 'POST'){
        // response ketika post
    }
} 
