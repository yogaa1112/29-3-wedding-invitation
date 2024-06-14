import React, { useState } from 'react';

function DataPemesanan() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    { id: 1, alamat: '001', mempelaiP: 'John Doe', mempelaiW: 'Jane Doe', email: 'john@example.com', whatsapp: '0898', tanggal: '12-10-2024', paket: 'silver', tema: "bebas" },
    { id: 2, alamat: '002', mempelaiP: 'Jane Smith', mempelaiW: 'John Smith', email: 'jane@example.com', whatsapp: '0898', tanggal: '12-10-2024', paket: 'silver', tema: "bebas" },
    { id: 3, alamat: '003', mempelaiP: 'Bob Johnson', mempelaiW: 'Alice Johnson', email: 'bob@example.com', whatsapp: '0898', tanggal: '12-10-2024', paket: 'silver', tema: "bebas" },
  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.alamat.includes(search) ||
    item.mempelaiP.toLowerCase().includes(search.toLowerCase()) ||
    item.mempelaiW.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.whatsapp.includes(search) ||
    item.tanggal.includes(search) ||
    item.paket.toLowerCase().includes(search.toLowerCase()) ||
    item.tema.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Data Pemesanan</h3>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Alamat Website</th>
              <th scope="col">Nama Mempelai Pria</th>
              <th scope="col">Nama Mempelai Wanita</th>
              <th scope="col">Email</th>
              <th scope="col">Whatsapp</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Paket</th>
              <th scope="col">Tema</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.alamat}</td>
                <td>{item.mempelaiP}</td>
                <td>{item.mempelaiW}</td>
                <td>{item.email}</td>
                <td>{item.whatsapp}</td>
                <td>{item.tanggal}</td>
                <td>{item.paket}</td>
                <td>{item.tema}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataPemesanan;
