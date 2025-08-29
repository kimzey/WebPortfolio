import React from 'react';

const ParallaxSection = ({ id, bgImage, children }) => (
  <section id={id} className="parallax-section" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="content">
      {children}
    </div>
  </section>
);

export default ParallaxSection;
