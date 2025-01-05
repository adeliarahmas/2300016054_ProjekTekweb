import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const Dashboard = () => {
  // Data Harga Sawit per Hari
  const priceChartData = {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [
      {
        label: 'Harga Sawit (Rp)',
        data: [3500, 3700, 3600, 3650, 3800, 3750, 3900],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data Pendapatan 6 Bulan Terakhir
  const revenueChartData = {
    labels: ['Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [
      {
        label: 'Pendapatan (Juta Rp)',
        data: [10, 20, 20, 15, 20, 25],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Judul Dashboard */}
      <div className="text-center py-8 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold">Perkebunan Sawit</h1>
        <p className="text-lg mt-2">Informasi seputar harga dan pendapatan sawit</p>
      </div>

      {/* Statistik Tambahan dalam Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
          <p className="text-gray-700 font-medium">Luas Perkebunan Kelapa Sawit:</p>
          <p className="text-gray-900 font-bold">11 Hektar</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
          <p className="text-gray-700 font-medium">Total Produksi Minyak Sawit:</p>
          <p className="text-gray-900 font-bold">45 ribu Ton</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
          <p className="text-gray-700 font-medium">Pendapatan perbulan:</p>
          <p className="text-gray-900 font-bold">Rp 10.000.000</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 space-y-8">
        {/* Berita dan Informasi Sawit */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Perkembangan Terbaru</h2>
          <p className="text-gray-700">
            Industri kelapa sawit di Indonesia terus mengalami perkembangan pesat. Sebagai salah satu penghasil minyak sawit 
            terbesar di dunia, Indonesia memainkan peran penting dalam pasar global. Dalam beberapa bulan terakhir, harga minyak 
            sawit mengalami fluktuasi akibat perubahan cuaca dan kebijakan ekspor yang diterapkan pemerintah.
          </p>
          <p className="text-gray-700">
            Faktor yang memengaruhi harga sawit saat ini:
            <ul className="list-disc pl-6 space-y-2">
              <li>Permintaan pasar internasional yang terus meningkat.</li>
              <li>Gangguan distribusi akibat kondisi cuaca ekstrem.</li>
              <li>Peningkatan penggunaan minyak sawit sebagai bahan bakar nabati.</li>
              <li>Kebijakan baru terkait pengurangan emisi karbon global.</li>
            </ul>
          </p>
        </div>

        {/* Grafik Harga Sawit */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Grafik Harga Sawit Per Hari</h2>
          <div className="max-w-full overflow-hidden rounded-lg shadow-xl">
            <Line data={priceChartData} />
          </div>
        </div>

        {/* Grafik Pendapatan */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Grafik Pendapatan 6 Bulan Terakhir</h2>
          <div className="max-w-full overflow-hidden rounded-lg shadow-xl">
            <Line data={revenueChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
