import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">

        <div className="profile">
          <Image src="/img/profile-img.webp" alt="image-profile" className="img-fluid rounded-circle" width={100} height={100} />
        
          <h1 className="text-light"><a href="/">Nova Ardiansyah</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://www.facebook.com/Nova981" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/novaardiansyah._/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/novaardiansyah/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/novaardiansyah" className="github"><i className="bx bxl-github"></i></a>
            <a href="/cv/nova-ardiansyah-2023.pdf" className="download-cv" download data-bs-toggle="tooltip" data-bs-placement="bottom" title="Download CV"><i className="bx bx-download"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul className="pb-5 mb-5">
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#gallery" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Gallery</span></a></li>
            <li><a href="#blog" className="nav-link scrollto"><i className="bx bx-news"></i> <span>Blog</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
