// Contoh cara menggunakan data produk dari JSON ke dalam Galeri/Pilihan Form
const dataProduk = {
  "produk": [
    { "id": 1, "nama": "Tas Kulit Izorbag", "harga": 750000 },
    { "id": 2, "nama": "Tas Kain Izorbag", "harga": 350000 },
    { "id": 3, "nama": "Tas Anyaman Izorbag", "harga": 450000 }
  ]
};

// Menambahkan interaksi halus saat scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.padding = '10px 15px';
    nav.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    nav.style.padding = '15px';
  }
});