import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Fitur() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1000ms
  }, []);

  const features = [
    {
      icon: "🔥",
      title: "Domain Ekslusif",
      description:
        "Menggunakan mekanisme subdomain dan tersedia paket custom domain (white label)",
    },
    {
      icon: "📝",
      title: "Kustom Nama Tamu",
      description:
        "Satu tamu, satu undangan. Selayaknya undangan pernikahan fisik",
    },
    {
      icon: "🖋️",
      title: "Kustom Penuh Teks",
      description:
        "Seluruh teks pada undangan dapat Anda ubah sesuai keinginan",
    },
    {
      icon: "🚀",
      title: "Shareblast (Coming Soon)",
      description:
        "Bagi undangan kepada seluruh tamu terdaftar dari WhatsApp hanya dengan satu kali klik",
    },
    {
      icon: "💡",
      title: "Konten Lengkap",
      description:
        "Tersedia berbagai jenis konten baik teks, gambar, link, peta, musik hingga video",
    },
    {
      icon: "✨",
      title: "Tema Instan",
      description:
        "Tersedia berbagai macam tema siap pakai yang dapat diganti kapan saja tanpa batas",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Manajemen Tamu",
      description:
        "Fitur pengaturan tamu baik personal ataupun grup sesuai preferensi (undangan/informasi)",
    },
    {
      icon: "📚",
      title: "Reservasi Buku Tamu",
      description:
        "Fitur penerima ucapan dari tamu dan konfirmasi kehadiran dengan manajemen data yang baik",
    },
    {
      icon: "💰",
      title: "Pembayaran Mudah",
      description:
        "Pembayaran dapat dilakukan kapan saja, mudah, otomatis dengan metode pembayaran yang lengkap",
    },
    {
      icon: "📖",
      title: "Story and Quotes",
      description:
        "Ceritakan perjalanan atau deskripsi undangan Anda & tambahkan quotes kepada tamu undangan",
    },
    {
      icon: "🎁",
      title: "Hadiah",
      description:
        "Tersedia fitur kirim hadiah secara online ke rekening kamu atau alamat melalui undanganmu",
    },
    {
      icon: "⏱️",
      title: "Countdown Timer",
      description:
        "Tersedia fitur countdown timer yang dapat berfungsi sebagai pengingat waktu acara",
    },
  ];

  return (
    <section id="fitur" className="fitur py-5">
      <div className="container">
        <h2 className="section-title text-center mt-5 mb-5">Fitur Kami</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div
              className="col-12 col-md-6 col-lg-3 mb-4"
              key={index}
              data-aos="fade-up" // Tambahkan data-aos dengan animasi fade-up
              data-aos-duration="1000" // Durasi animasi 1000ms (opsional, bisa disesuaikan)
            >
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="icon mb-3 h2">{feature.icon}</div>
                  <h2 className="card-title h5">{feature.title}</h2>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fitur;
