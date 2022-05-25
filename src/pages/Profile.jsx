import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">
        Halo namaku yusuf, aku adalah seorang web devolepr yang baru lulus dari
        uniska
      </p>
    </section>
  );
};

export default Profile;
