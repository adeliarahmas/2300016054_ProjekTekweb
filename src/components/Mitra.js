import React from 'react';

const Mitra = () => {
  // Data statis mitra, harga sawit, dan penjelasan singkat
  const mitraData = [
    {
      namaPerusahaan: 'PTPN V Tanah Putih',
      alamat: 'Jl. Tanah putih, Bagan SInembah',
      kontak: '(0761) 967-8930',
      hargaSawit: 3780,
      deskripsi: 'PTPN V Tanah Putih, solusi terbaik untuk produk kelapa sawit berkualitas tinggi dengan komitmen pada keberlanjutan dan inovasi.',
    },
    {
      namaPerusahaan: 'PT Agro Makmur Sejahtera',
      alamat: 'Jl. Kebun Sawit No. 45, Medan',
      kontak: '(061) 123-4567',
      hargaSawit: 3650,
      deskripsi: 'PT Agro Makmur Sejahtera adalah perusahaan yang bergerak di bidang pengolahan kelapa sawit dengan kapasitas produksi yang besar.',
    },
    {
      namaPerusahaan: 'CV Jaya Tani Abadi',
      alamat: 'Jl. Perkebunan Raya No. 22, Palembang',
      kontak: '(0711) 789-1234',
      hargaSawit: 3640,
      deskripsi: 'CV Jaya Tani Abadi fokus pada produksi minyak sawit berkualitas dengan teknologi modern untuk meningkatkan efisiensi produksi.',
    },
    {
      namaPerusahaan: 'PT Sawit Prima',
      alamat: 'Jl. Merdeka Timur No. 88, Pekanbaru',
      kontak: '(0761) 987-6543',
      hargaSawit: 3680,
      deskripsi: 'PT Sawit Prima memiliki visi untuk menjadi pemimpin dalam industri kelapa sawit dengan mempertahankan kualitas terbaik di setiap proses.',
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold text-center">Informasi Mitra & Harga Sawit</h1>
          <p className="text-center mt-2">Data mitra terpercaya dan harga sawit</p>
        </div>

        <div className="p-6">
          {mitraData.map((mitra, index) => (
            <div
              key={index}
              className="mb-6 p-4 border rounded-lg shadow-md bg-gradient-to-br from-white to-gray-100"
            >
              <h2 className="text-2xl font-semibold text-blue-600">
                {mitra.namaPerusahaan}
              </h2>
              <p className="text-gray-700 mt-2">
                <span className="font-bold">Alamat:</span> {mitra.alamat}
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-bold">Kontak:</span> {mitra.kontak}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-bold">Deskripsi:</span> {mitra.deskripsi}
              </p>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <span className="font-bold text-blue-600">Harga Sawit:</span>{' '}
                <span className="text-green-600 text-xl font-bold">
                  Rp {mitra.hargaSawit.toLocaleString()} / kg
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mitra;
