function Footer({ items }) {
  if (items.length === 0)
    return <footer className="stats">daftar belanjaan masih kosong</footer>;
  const totalItem = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.floor((checkedItems / totalItem) * 100);

  return (
    <footer className="stats">
      Ada {totalItem} barang di daftar blanjaan, {checkedItems} barang sudah
      sudah di beli ({percentage}%)
    </footer>
  );
}

export default Footer;
