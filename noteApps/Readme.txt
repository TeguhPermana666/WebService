# Kireteria proyek
- Membangun arsitektur RESTful API untuk aplikasi catatan sederhana.
    - create, read, update, delete catatan. (CRUD)

1. Web Server dapat menyimpan catatan

2.  Web server menampilkan catatan

3. Web server dapat mengubah catatan

4. Web server dapat menghapus catatan

# Struktur Proyek
1. server.js : Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
2. routes.js : Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.
3. handler.js : Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.
4. notes.js : Memuat data notes yang disimpan dalam bentuk array objek.

notes-app-back-end
├── node_modules
├── src
│ ├── handler.js
│ ├── notes.js
│ ├── routes.js
│ └── server.js
├── .eslintrc.json
├── package-lock.json
└── package.json