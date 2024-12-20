import React, { useState } from 'react';

function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-12-01', location: 'Ladang klp 5', partner: 'ptpn 5', quantity: 10, amount: 5000000 },
    { id: 2, date: '2024-12-10', location: 'Ladang klp 6', partner: 'pt dwg', quantity: 20, amount: 20000000 },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    date: '',
    location: '',
    partner: '',
    quantity: '',
    amount: '',
  });

  const handleAdd = () => {
    const nextId = transactions.length ? transactions[transactions.length - 1].id + 1 : 1;
    setTransactions([...transactions, { id: nextId, ...newTransaction, quantity: Number(newTransaction.quantity), amount: Number(newTransaction.amount) }]);
    setNewTransaction({ date: '', location: '', partner: '', quantity: '', amount: '' });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleEdit = (id, key, value) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id ? { ...transaction, [key]: value } : transaction
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transaksi</h2>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Tanggal</th>
            <th className="px-4 py-2">Lokasi</th>
            <th className="px-4 py-2">Mitra</th>
            <th className="px-4 py-2">Kuantitas(kg)</th>
            <th className="px-4 py-2">Jumlah</th>
            <th className="px-4 py-2">Hapus</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="px-4 py-2 text-center">
                <input
                  type="date"
                  value={transaction.date}
                  onChange={(e) => handleEdit(transaction.id, 'date', e.target.value)}
                  className="border rounded-md p-1 w-full"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={transaction.location}
                  onChange={(e) => handleEdit(transaction.id, 'location', e.target.value)}
                  className="border rounded-md p-1 w-full"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={transaction.partner}
                  onChange={(e) => handleEdit(transaction.id, 'partner', e.target.value)}
                  className="border rounded-md p-1 w-full"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <input
                  type="number"
                  value={transaction.quantity}
                  onChange={(e) => handleEdit(transaction.id, 'quantity', Number(e.target.value))}
                  className="border rounded-md p-1 w-full"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  value={transaction.amount}
                  onChange={(e) => handleEdit(transaction.id, 'amount', Number(e.target.value))}
                  className="border rounded-md p-1 w-full"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Tambah Transaksi</h3>
        <input
          type="date"
          placeholder="Tanggal"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          className="border p-2 mr-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Lokasi"
          value={newTransaction.location}
          onChange={(e) => setNewTransaction({ ...newTransaction, location: e.target.value })}
          className="border p-2 mr-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Mitra"
          value={newTransaction.partner}
          onChange={(e) => setNewTransaction({ ...newTransaction, partner: e.target.value })}
          className="border p-2 mr-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Kuantitas"
          value={newTransaction.quantity}
          onChange={(e) => setNewTransaction({ ...newTransaction, quantity: e.target.value })}
          className="border p-2 mr-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Jumlah"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          className="border p-2 mr-2 rounded-md"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Tambah
        </button>
      </div>
    </div>
  );
}

export default Transactions;
