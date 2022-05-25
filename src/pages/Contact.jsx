import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        Kamu dapat menghubungiku di bawah ini
      </p>
      <ul>
        <li>WA : 081528441344</li>
        <li>Email : mnyusuf14@gmail.com</li>
      </ul>
      <p className="section-description">
        Atau kamu dapat melihatku Pansos di sosmed:
      </p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
