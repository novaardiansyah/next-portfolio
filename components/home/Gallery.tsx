'use client';

import Image from 'next/image';
import React from 'react'

function Gallery() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <section id="gallery" className="portfolio section-bg pb-0">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Discover a visual journey of my innovative projects that blend art and technology. Each piece is a testament to my passion for crafting unique and impactful experiences. Join me on this exciting ride through a world where imagination knows no limits.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 portfolio-item tag_*">
            <div className="portfolio-wrap" style={{ position: 'relative', width: '100%', height: '100vh' }}>
              <Image src="/img/gallery/01J3W32ZGNWGJ77581AKEY0BVY.png" alt="01J3W32ZGNWGJ77581AKEY0BVY.png" fill className="object-cover" />
              <div className="portfolio-links">
                <a href="#" title="More Details" style={{ width: '100%' }} target="_blank" onClick={handleClick}>
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
