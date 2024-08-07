import React, { useState } from "react";
import gallery1 from "../../img/gallery-01.png";
import gallery2 from "../../img/gallery-02.png";
import gallery3 from "../../img/gallery-03.jpg";
import gallery4 from "../../img/gallery-04.png";
import gallery5 from "../../img/gallery-05.jpg";
import gallery6 from "../../img/gallery-06.png";
// import gallery7 from "../../img/gallery-07.png";
// import gallery8 from "../../img/gallery-08.png";
import "./GalleryImg.css";
const GalleryImg = () => {
  const GallaryImages = [
    { id: 1, img: gallery1, alt: "gallery1" },
    { id: 2, img: gallery2, alt: "gallery2" },
    { id: 3, img: gallery3, alt: "gallery3" },
    { id: 4, img: gallery4, alt: "gallery4" },
    { id: 5, img: gallery5, alt: "gallery5" },
    { id: 6, img: gallery6, alt: "gallery6" },
    // { id: 7, img: gallery6, alt: "gallery7" },
    // { id: 8, img: gallery5, alt: "gallery8" },
  ];
  const [gallaryImgs] = useState(GallaryImages);
  return (
    <div className="gallary" id="Gallery">
      <h2 className="main-title">Gallary</h2>
      <div className="container">
        {gallaryImgs.map((GallaryImages) => (
          <div className="box" key={GallaryImages.id}>
            <div className="image">
              <img src={GallaryImages.img} alt={GallaryImages.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImg;
