import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const aboutUsImageUrl = "https://github.com/mazdanwllsyh/mypersonal/blob/main/ME/nikahdongfavicon.png?raw=true";

  return (
    <section id="about" className="aboutus container-custom py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mt-5">
            <img
              src={aboutUsImageUrl}
              className="d-block mx-auto w-50 h-50 object-fit-cover"
              alt="About Us"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="section-title mb-4 text-center">
              Tentang Nikah Dong
            </h2>
            <p className="text-about-us mb-4">
              NikahDong.com adalah Website pembuatan undangan pernikahan secara online, website ini menyediakan beberapa template dan desain undangan pernikahan, sehingga calon customer dapat membuat undangan sesuai selera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
