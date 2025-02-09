import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Gallery from "@/components/home/Gallery";
import Header from "@/components/home/Header"
import Resume from "@/components/home/Resume";
import Skill from "@/components/home/Skill";

export default function Home() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      
      <Header />

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1 style={{ fontSize: "2.5rem" }}>Nova Ardiansyah</h1>
          <p style={{ fontSize: "1rem" }}>I'm <span className="typed" data-typed-items="Web Developer, Mobile App Developer, Problem Solver, Business Analyst, Technology Enthusiast"></span></p>
        </div>
      </section>

      <main id="main">
        <About />
        <Skill />
        <Resume />
        <Gallery />
        <Blog />
        <Contact />

        <div className="modal fade" id="dynamicModal" tabIndex={-1} aria-labelledby="dynamicModalLabel" aria-hidden="true" style={{  zIndex: 1050 }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}