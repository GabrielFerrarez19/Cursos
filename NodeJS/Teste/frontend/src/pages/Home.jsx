import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: 0, price: 0 });

  const loadProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/products");
    setProducts(res.data);
  };

  const createProduct = async () => {
    await axios.post("http://localhost:3001/api/products", form);
    setForm({ name: "", quantity: 0, price: 0 });
    loadProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3001/api/products/${id}`);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Estoque</h1>
      <div className="mb-4 flex gap-2">
        <input
          className="border p-2"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          className="border p-2"
          placeholder="Quantidade"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) })}
        />
        <input
          type="number"
          className="border p-2"
          placeholder="Preço"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={createProduct}>
          Adicionar
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nome</th>
            <th className="border p-2">Quantidade</th>
            <th className="border p-2">Preço</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.quantity}</td>
              <td className="border p-2">R$ {p.price.toFixed(2)}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => deleteProduct(p.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}