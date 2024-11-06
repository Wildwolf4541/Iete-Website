import React from 'react';
import '../css/gallery.css';

const Gallery = () => {
    const placeholders = Array.from({ length: 18 }); // 3 rows of 6 images = 18 placeholders

    return (
        <div className="gallery-container">
            <div className="gallery-main">
                <h1 className="gallery-title">GALLERY</h1>
            </div>
            
          


          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            
          
          </div>
 
        </div>
    );
};

export default Gallery;
