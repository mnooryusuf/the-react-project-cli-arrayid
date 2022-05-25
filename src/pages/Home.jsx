import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Selamat datang di website qu</h1>
      <p className="section-description">
        Halo semua ini webstie aku. kamu bisa mendapatkan informasi seputar
        profilku disini
      </p>
    </section>
  );
};

export default Home;
