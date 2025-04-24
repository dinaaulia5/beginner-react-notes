import { useState } from "react";

function Form({ onAddItem, deleteItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      quantity,
      checked: false,
      id: Date.now(),
    };

    // console.log(newItem);
    onAddItem(newItem);
    deleteItem();

    setName("");
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, index) => (
    <option value={1 + index} key={1 + index}>
      {1 + index}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}

export default Form;
