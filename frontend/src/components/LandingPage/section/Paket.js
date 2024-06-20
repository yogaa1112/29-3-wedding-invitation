import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Paket() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const packages = [
    {
      medalColor: "#cd7f32", // Bronze medal color
      cardColor: "#FFFFFF", // Background color for Bronze card
      title: "Bronze",
      price: "Rp. 49.900",
      features: [
        "Menggunakan domain gratis (Nikahdong.com)",
        "Hanya Dapat mengakses 1 Template",
        "Informasi Acara",
        "Countdown Timer",
        "Ucapan",
        "Link Lokasi",
        "Menampilkan 3 Foto",
        "RSVP",
        "Aktif selama 14 hari",
        "35 tamu",
      ],
    },
    {
      medalColor: "#c0c0c0", // Silver medal color
      cardColor: "#F7F7F7A7", // Background color for Silver card
      title: "Silver",
      price: "Rp. 99.900",
      features: [
        "Menggunakan domain gratis (Nikahdong.com)",
        "Dapat mengakses 3 Template",
        "Informasi Acara",
        "Countdown Timer",
        "Ucapan",
        "Link Lokasi",
        "Menampilkan 50 Foto + 2 Video",
        "RSVP",
        "Aktif selama 8 Bulan",
        "Quotes",
        "Story",
        "95 tamu",
        "Lagu",
      ],
    },
    {
      medalColor: "#ffd700", // Gold medal color
      cardColor: "#E9E9E9CB", // Background color for Gold card
      title: "Gold",
      price: "Rp. 249.900",
      features: [
        "Menggunakan Domain Kustom",
        "Dapat mengakses Semua Template",
        "Informasi Acara",
        "Countdown Timer",
        "Ucapan",
        "Link Lokasi",
        "Hingga Unlimited foto dan video",
        "RSVP",
        "Aktif selama 1 Tahun",
        "Quotes",
        "Story",
        "Hingga 250 tamu",
        "Lagu",
        "Hadiah",
        "Shareblast",
        "Scanner",
      ],
    },
  ];

  return (
    <section id="paket" className="paket py-5">
      <div className="container">
        <h2 className="section-title text-center mt-5">Paket</h2>
        <p className="section-subtitle text-center fw-bold mb-5 opacity-25">
          "ketuk untuk melihat harga"
        </p>
        <div className="row">
          {packages.map((pkg, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index * 300}`} // Delay animasi untuk setiap card
            >
              <div
                className="card h-100 text-center package-card"
                style={{ backgroundColor: pkg.cardColor }}
              >
                {pkg.title === "Gold" && (
                  <div className="best-deal">Best Deal</div>
                )}
                {pkg.title === "Silver" && (
                  <div className="best-deal">Best Choice</div>
                )}
                <div className="medal">
                  <FontAwesomeIcon
                    icon={faMedal}
                    style={{ color: pkg.medalColor }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{pkg.title}</h3>
                  <h5 className="card-price">{pkg.price}</h5>
                  <div className="card-features">
                    <ul>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Paket;
