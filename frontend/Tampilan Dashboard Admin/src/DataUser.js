import React, { useState } from 'react';

function DataUser() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Mark', email: 'mark@example.com', password: '@mdo', whatsapp: '654' },
    { id: 2, name: 'Jacob', email: 'jacob@example.com', password: '@fat', whatsapp: '20531' },
    { id: 3, name: 'Larry the Bird', email: 'larry@example.com', password: '@twitter', whatsapp: '898' },
  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Data User</h3>
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">No Whatsapp</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.whatsapp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataUser;
