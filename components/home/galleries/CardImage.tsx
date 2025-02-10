import Image from 'next/image'
import React from 'react'
interface CardImageProps {
  id: number;
  image: string;
  tag_slug: string;
  url: string;
  onClick: (image: string, url: string) => void;
}
const CardImage: React.FC<CardImageProps> = ({ id, image, tag_slug, url, onClick }) => {
  if (image == 'no-image' && url == 'default') {
    return (
      <div className={`col-lg-4 col-md-6 portfolio-item tag_${tag_slug}`} data-aos="fade-down">
        <div className="portfolio-wrap skeleton skeleton-image" style={{ position: 'relative', width: '100%', height: 180 }}>
        </div>
      </div>
    )
  }

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item tag_${tag_slug}`} data-aos="fade-up">
      <div className="portfolio-wrap position-relative" style={{ width: '100%', height: 180 }}>
        <Image src={image} alt={`image-${tag_slug}-${id}`} fill className="object-cover img-fluid" style={{ objectFit: "cover" }} />
        <div className="portfolio-links">
          <a href={url || "#"} title="More Details" style={{ width: '100%' }} onClick={(e) => { e.preventDefault(); onClick(image, url); }}>
            <i className="bx bx-link"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardImage
