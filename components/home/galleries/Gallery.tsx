'use client';

import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import CardImage from './CardImage'
type Galleries = {
  id: number;
  image: string;
  tag_id: number;
  url: string;
  tag: {
    id: number;
    name: string;
    slug: string;
  }
};

type GalleryTags = {
  id: number,
  name: string;
  slug: string
}

function Gallery() {
  const [galleries, setGalleries] = useState<Galleries[]>([]);
  const [tags, setTags] = useState<GalleryTags[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [modalImage, setModalImage] = useState("");
  const [modalDetail, setModalDetail] = useState("");
  const [show, setShow] = useState(false);

  const [activeFilter, setActiveFilter] = useState("*");

  const handleClick = (image: string, url: string) => {
    setModalImage(image);
    setModalDetail(url)
    setShow(true);
  };

  const fetchData = async () => {
    try {
      const [tagsRes, galleriesRes] = await Promise.all([
        fetch("/api/gallery_tags").then((res) => res.json()),
        fetch("/api/galleries").then((res) => res.json()),
      ]);
  
      setTags(tagsRes.data);
      setGalleries(galleriesRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

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
              <li className={activeFilter === '*' ? "filter-active" : ""} onClick={() => setActiveFilter('*')}>All</li>
              { tags && tags.map((tag) => (
                  <li key={tag.id} className={activeFilter === `${tag.slug}` ? "filter-active" : ""}
                  onClick={() => setActiveFilter(`${tag.slug}`)}>{tag.name}</li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          { loading || !galleries ? (
              Array.from({ length: 6 }).map((_, index) => (
                <CardImage key={index} image="no-image" id={0} tag_slug="all" url="default" onClick={handleClick} />
              ))
            ) : (
              <>
                { galleries.map((gallery) => {
                    if (activeFilter == '*' || gallery.tag.slug == activeFilter) {
                      return (
                        <CardImage key={gallery.id} image={gallery.image} id={gallery.id} tag_slug={gallery.tag.slug} url={gallery.url} onClick={handleClick} />
                      )
                    }
                  })
                }
              </>
            )
          }
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered scrollable size="lg" style={{ zIndex: 10000 }}>
        <Modal.Header closeButton />
        <Modal.Body>
          <img src={modalImage} alt="Gallery Preview" className="img-fluid" />

          { modalDetail && (
              <div className="d-flex justify-content-end mt-4 mr-2">
                <a href={modalDetail} target="_blank" className="btn btn-sm btn-outline-primary" rel="noreferrer">
                  See more
                </a>
              </div>
            )
          }
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Gallery
