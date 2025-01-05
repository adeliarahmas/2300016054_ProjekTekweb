import React from "react";

const Teker = () => {
  const workers = [
    { id: 1, nik: "123456789", name: "Abe Lay", contact: "08123456789", salary: 150000 },
    { id: 2, nik: "987654321", name: "Jonathan", contact: "08198765432", salary: 150000 },
    { id: 3, nik: "567891234", name: "Lana", contact: "08156789123", salary: 130000 },
    { id: 4, nik: "432198765", name: "Darmis", contact: "08143219876", salary: 180000 },
  ];

  return (
    <div className="max-w-6xl">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-500">
        Informasi Tenaga Kerja (gaji /ton)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workers.map((worker) => (
          <div
            key={worker.id}
            className="p-4 bg-gray-50 shadow-md rounded-md hover:bg-gray-100"
          >
            <div className="text-lg font-semibold text-blue-600 mb-2">
              {worker.name}
            </div>
            <div className="text-gray-600 mb-1">NIK: {worker.nik}</div>
            <div className="text-gray-600 mb-1">Kontak: {worker.contact}</div>
            <div className="text-green-600 font-semibold mb-2">
              Rp {worker.salary.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teker;
