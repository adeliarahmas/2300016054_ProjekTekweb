import React, { useState } from "react";

const Teker = () => {
  const [workers, setWorkers] = useState([]);
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [salary, setSalary] = useState("");

  const addWorker = () => {
    if (nik && name && contact && salary) {
      setWorkers([
        ...workers,
        { id: Date.now(), nik, name, contact, salary: Number(salary) },
      ]);
      setNik("");
      setName("");
      setContact("");
      setSalary("");
    }
  };

  const deleteWorker = (id) => {
    setWorkers(workers.filter((worker) => worker.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-500">Daftar Tenaga Kerja</h2>

      <div className="mb-6 space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            placeholder="NIK"
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Tenaga Kerja"
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Kontak"
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Gaji"
            className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={addWorker}
          className="w-full p-3 bg-black text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Tambah Tenaga Kerja
        </button>
      </div>

      <div className="space-y-4">
        {workers.map((worker) => (
          <div
            key={worker.id}
            className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-md hover:bg-gray-100"
          >
            <div className="flex space-x-4">
              <div className="text-lg font-semibold text-blue-600">{worker.name}</div>
              <div className="text-gray-600">{worker.contact}</div>
              <div className="text-gray-600">NIK: {worker.nik}</div>
            </div>
            <div className="text-green-600 font-semibold">Rp {worker.salary.toLocaleString()}</div>
            <button
              onClick={() => deleteWorker(worker.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teker;