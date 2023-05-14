import React from 'react'
import "./Cards.css";


const Cards = () => {
  return (
    

    <div class="container">
    <div class="img-wrapper">
      <img src="image1.jpg" alt="Image 1" />
      <div class="img-text">
        <p>Image 1 description</p>
      </div>
    </div>
    
    <div class="img-wrapper">
      <img src="image2.jpg" alt="Image 2" />
      <div class="img-text">
        <p>Image 2 description</p>
      </div>
    </div>
    
    <div class="img-wrapper">
      <img src="image3.jpg" alt="Image 3" />
      <div class="img-text">
        <p>Image 3 description</p>
      </div>
    </div>
    
    <div class="img-wrapper">
      <img src="image4.jpg" alt="Image 4" />
      <div class="img-text">
        <p>Image 4 description</p>
      </div>
    </div>
  </div>
  
  )
}

export default Cards
