import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p className="mb-2">Hi there, I'm Nova!</p>
          <p>I'm a passionate web developer based in Tangerang Selatan, Banten, Indonesia. With a background in software engineering and a love for crafting clean and efficient code, I'm dedicated to creating engaging and user-friendly digital experiences.</p>
          <p className="d-none">As a current active student pursuing a Bachelor's degree in Computer Science at Universitas Pamulang, I'm constantly driven by the thrill of learning and exploring new technologies. My journey in the world of programming started during my high school years, where I specialized in Software Engineering. This foundation has since led me to become a versatile developer, proficient in both web and mobile development.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 text-center" data-aos="fade-right">
            <Image src="/img/profile-img.webp" className="img-fluid" alt="profile-img" width={200} height={200} />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer &amp; Mobile Developer.</h3>
            <p className="fst-italic">
              Let's make something great together!
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>11 November 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(+62) 895 0666 8480</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tangerang, Indonesia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span id="age" data-birthdate="2001-11-11">-</span></li>
                  <li className="d-none"><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>-</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Status:</strong> <span>Active Student</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href="mailto:novaardiansyah78@gmail.com" className="text-dark">novaardiansyah78@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <p>
              As a current active student pursuing a Bachelor's degree in Computer Science at Universitas Pamulang, I'm constantly driven by the thrill of learning and exploring new technologies. My journey in the world of programming started during my high school years, where I specialized in Software Engineering. This foundation has since led me to become a versatile developer, proficient in both web and mobile development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
