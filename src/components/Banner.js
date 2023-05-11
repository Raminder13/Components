import React from 'react';
import '../styles/index.css';

function Banner(props) {
  return (
    <section className="banner">
    <div className="container">
      <h2 className="title">Welcome to MITT Henlow</h2>
      <p className="description">MITT's 30+ certificate, diploma, and post-graduate programs
       give you the skills you need at any stage of your career. Strong industry partnerships,
       expert instructors and hands-on learning take you directly from classroom to career.</p>
      <button className="primary-btn">Get started</button>
      <button className="secondary-btn">Learn more</button>
    </div>
  </section>  );
}

export default Banner;
