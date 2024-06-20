register

http://localhost:3000/auth/register

method POST

request
{
    "email": "boy@gmail.com",
    "username": "boy",
    "NoWa":6256627728,
    "password": "password"
}

login

http://localhost:3000/auth/login

method POST

request

{
  "email": "boy@gmail.com",
  "password": "password"
}

logout

http://localhost:3000/auth/logout

method POST

menampilkan halaman profil

http://localhost:3000/auth/profile

method GET

response

{
  "_id": "666ac2abac3198c44134280c",
  "email": "admin1@gmail.com",
  "username": "admin1",
  "NoWa": 613347728
}

#CLIENT
(fitur client harus login sebagai client)

buat pesanan

http://localhost:3000/client/buatpesanan

method POST

request


  {
    "mempelaiPria": "adam",
    "mempelaiWanita": "siti",
    "email": "contoh@gmail.com",
    "NoWa": "08123456789",
    "tanggalAcara": "2024-06-15",
    "paket": "Paket Gold",
    "tema": "Tema Klasik"
}

response

{
  "message": "Pesanan berhasil dibuat",
  "pesanan": {
    "userId": "666abff90301bb7b7e189d5d",
    "mempelaiPria": "adam",
    "mempelaiWanita": "siti",
    "email": "contoh@gmail.com",
    "NoWa": "08123456789",
    "tanggalAcara": "2024-06-15T00:00:00.000Z",
    "paket": "Paket Gold",
    "tema": "Tema Klasik",
    "_id": "666ac1160301bb7b7e189d61",
    "__v": 0
  }
}

get pesanan client

method GET

http://localhost:3000/client/pesanan

response

[
  {
    "_id": "666ac1160301bb7b7e189d61",
    "userId": "666abff90301bb7b7e189d5d",
    "mempelaiPria": "adam",
    "mempelaiWanita": "siti",
    "email": "contoh@gmail.com",
    "NoWa": "08123456789",
    "tanggalAcara": "2024-06-15T00:00:00.000Z",
    "paket": "Paket Gold",
    "tema": "Tema Klasik",
    "__v": 0
  }
]


#ADMIN

fitur admin (harus login sebagai admin)

http://localhost:3000/admin/pesanan

method GET

response

[
  {
    "_id": "666ac1160301bb7b7e189d61",
    "userId": {
      "_id": "666abff90301bb7b7e189d5d",
      "username": "boy"
    },
    "mempelaiPria": "adam",
    "mempelaiWanita": "siti",
    "email": "contoh@gmail.com",
    "NoWa": "08123456789",
    "tanggalAcara": "2024-06-15T00:00:00.000Z",
    "paket": "Paket Gold",
    "tema": "Tema Klasik"
  }
]

#SUPER ADMIN

menambahkan admin

http://localhost:3000/superAdmin/addAdmin

method POST

request

{
    "email": "admin@gmail.com",
    "username": "admin",
    "NoWa":613347728,
    "password": "adminpassword"
}


menampilkan data admin

http://localhost:3000/superAdmin/admins

method GET

response


  {
    "_id": "666abff90301bb7b7e189d5d",
    "email": "boy@gmail.com",
    "username": "boy",
    "NoWa": 6256627728
  }

menampilkan data clients

http://localhost:3000/superAdmin/clients

method GET


response

{
    "_id": "666abf2b0301bb7b7e189d59",
    "email": "admin@gmail.com",
    "username": "admin",
    "NoWa": 613347728
  }

menghapus data admin

method DELETE

http://localhost:3000/superAdmin/admin/666abf2b0301bb7b7e189d59

response

{
  "message": "Admin berhasil dihapus"
}

menghapus data client

method DELETE

http://localhost:3000/superAdmin/client/(isi dengan id client)

response

{
  "message": "client berhasil dihapus"
}