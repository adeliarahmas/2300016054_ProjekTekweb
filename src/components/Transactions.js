import React, { useState, useEffect } from 'react';

const Transactions = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [dataTransaksi, setDataTransaksi] = useState({
    nomor: '',
    tanggal: '',
    lokasi: '',
    mitra: '',
    jumlah: '',
    pendapatan: '',
  });
  const [sedangEdit, setSedangEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  // Load data dari localStorage saat komponen dimuat
  useEffect(() => {
    const data = localStorage.getItem('transaksi');
    if (data) {
      setTransaksi(JSON.parse(data));
    }
  }, []);

  // Simpan data ke localStorage
  const simpanKeLocalStorage = (data) => {
    localStorage.setItem('transaksi', JSON.stringify(data));
  };

  // Tambah transaksi baru
  const handleTambah = () => {
    if (
      dataTransaksi.nomor &&
      dataTransaksi.tanggal &&
      dataTransaksi.lokasi &&
      dataTransaksi.mitra &&
      dataTransaksi.jumlah &&
      dataTransaksi.pendapatan
    ) {
      const transaksiBaru = [
        ...transaksi,
        {
          id: Date.now(),
          nomor: dataTransaksi.nomor,
          tanggal: dataTransaksi.tanggal,
          lokasi: dataTransaksi.lokasi,
          mitra: dataTransaksi.mitra,
          jumlah: dataTransaksi.jumlah,
          pendapatan: dataTransaksi.pendapatan,
        },
      ];
      setTransaksi(transaksiBaru);
      simpanKeLocalStorage(transaksiBaru);
      setDataTransaksi({ nomor: '', tanggal: '', lokasi: '', mitra: '', jumlah: '', pendapatan: '' });
    }
  };

  // Hapus transaksi
  const handleHapus = (id) => {
    const transaksiBaru = transaksi.filter((trx) => trx.id !== id);
    setTransaksi(transaksiBaru);
    simpanKeLocalStorage(transaksiBaru);
  };

  // Edit transaksi
  const handleEdit = (id) => {
    const trx = transaksi.find((trx) => trx.id === id);
    setDataTransaksi({
      nomor: trx.nomor,
      tanggal: trx.tanggal,
      lokasi: trx.lokasi,
      mitra: trx.mitra,
      jumlah: trx.jumlah,
      pendapatan: trx.pendapatan,
    });
    setSedangEdit(true);
    setIdEdit(id);
  };

  // Update transaksi
  const handleUpdate = () => {
    if (
      dataTransaksi.nomor &&
      dataTransaksi.tanggal &&
      dataTransaksi.lokasi &&
      dataTransaksi.mitra &&
      dataTransaksi.jumlah &&
      dataTransaksi.pendapatan
    ) {
      const transaksiBaru = transaksi.map((trx) =>
        trx.id === idEdit
          ? {
              ...trx,
              nomor: dataTransaksi.nomor,
              tanggal: dataTransaksi.tanggal,
              lokasi: dataTransaksi.lokasi,
              mitra: dataTransaksi.mitra,
              jumlah: dataTransaksi.jumlah,
              pendapatan: dataTransaksi.pendapatan,
            }
          : trx
      );
      setTransaksi(transaksiBaru);
      simpanKeLocalStorage(transaksiBaru);
      setSedangEdit(false);
      setIdEdit(null);
      setDataTransaksi({ nomor: '', tanggal: '', lokasi: '', mitra: '', jumlah: '', pendapatan: '' });
    }
  };

  // Menghitung total pendapatan
  const totalPendapatan = transaksi.reduce((total, trx) => total + parseFloat(trx.pendapatan), 0);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Kelola Transaksi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Nomor"
            value={dataTransaksi.nomor}
            onChange={(e) => setDataTransaksi({ ...dataTransaksi, nomor: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="date"
            value={dataTransaksi.tanggal}
            onChange={(e) => setDataTransaksi({ ...dataTransaksi, tanggal: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="text"
            placeholder="Lokasi"
            value={dataTransaksi.lokasi}
            onChange={(e) => setDataTransaksi({ ...dataTransaksi, lokasi: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="text"
            placeholder="Mitra"
            value={dataTransaksi.mitra}
            onChange={(e) => setDataTransaksi({ ...dataTransaksi, mitra: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="number"
            placeholder="Jumlah"
            value={dataTransaksi.jumlah}
            onChange={(e) => setDataTransaksi({ ...dataTransaksi, jumlah: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="number"
            placeholder="Pendapatan"
            value={dataTransaksi.pendapatan}
            onChange={(e) => setDataTransaksi({ ...dataTransaksi, pendapatan: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
        <button
          onClick={sedangEdit ? handleUpdate : handleTambah}
          className={`w-full sm:w-auto lg:w-1/4 p-3 text-white rounded-lg ${
            sedangEdit ? 'bg-amber-900 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-500'
          } focus:outline-none focus:ring-2 focus:ring-gray-500`}
        >
          {sedangEdit ? 'Perbarui' : 'Tambah'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-6 py-3 text-center">No</th>
              <th className="px-6 py-3 text-center">Tanggal</th>
              <th className="px-6 py-3 text-center">Lokasi</th>
              <th className="px-6 py-3 text-center">Mitra</th>
              <th className="px-6 py-3 text-center">Kuantitas (kg)</th>
              <th className="px-6 py-3 text-center">Pendapatan (Rp)</th>
              <th className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((trx, index) => (
              <tr key={trx.id} className="border-t hover:bg-gray-100">
                <td className="px-6 py-3 text-center">{index + 1}</td>
                <td className="px-6 py-3 text-center">{trx.tanggal}</td>
                <td className="px-6 py-3 text-center">{trx.lokasi}</td>
                <td className="px-6 py-3 text-center">{trx.mitra}</td>
                <td className="px-6 py-3 text-center">{trx.jumlah}</td>
                <td className="px-6 py-3 text-center">{trx.pendapatan.toLocaleString()}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleEdit(trx.id)}
                    className="bg-amber-700 text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleHapus(trx.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-400"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Menampilkan total pendapatan */}
      <div className="mt-4 text-right font-bold text-lg">
        <span>Total Pendapatan: Rp {totalPendapatan.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Transactions;
