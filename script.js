// Data Produk
const dataProduk = {
  "produk": [
    { "id": 1, "nama": "Tas Anak Izorbag", "harga": 100000 },
    { "id": 2, "nama": "Tas Kain Izorbag", "harga": 35000 },
    { "id": 3, "nama": "Tas Gendong Izorbag", "harga": 125000 },
    { "id": 4, "nama": "Tas Request Izorbag", "harga": "75.000 - 150.000" }
  ]
};

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.padding = '12px 20px';
    nav.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    nav.style.padding = '20px';
    nav.style.background = 'rgba(255, 255, 255, 0.9)';
  }
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  observer.observe(el);
});

// Form Submission Alert (Dummy)
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesanan Izorbag Anda telah kami terima dan akan segera diproses.');
});
