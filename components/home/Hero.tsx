import React from 'react'

function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1 style={{ fontSize: "2.5rem" }}>Nova Ardiansyah</h1>
        <p style={{ fontSize: "1rem" }}>I'm <span className="typed" data-typed-items="Web Developer, Mobile App Developer, Problem Solver, Business Analyst, Technology Enthusiast"></span></p>
      </div>
    </section>
  )
}

export default Hero
