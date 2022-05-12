import React from 'react'
import Image from 'next/image'
import image1 from '../images/Carrousel/image1_variant1.png'
import image2 from '../images/Carrousel/image2.png'
import image3 from '../images/Carrousel/image3.png'
import image4 from '../images/Carrousel/image1_variant2.png'
import image5 from '../images/Carrousel/image2_variant1.png'
import image6 from '../images/Carrousel/image3_variant2.png'
import image7 from '../images/Carrousel/image1.png'
import image8 from '../images/Carrousel/image3_variant1.png'
import image9 from '../images/Carrousel/image4.png'
import image10 from '../images/Carrousel/image6_variant1.png'
import image11 from '../images/Carrousel/image3_variant3.png'
import image12 from '../images/Carrousel/image1_variant6.png'
import image13 from '../images/Carrousel/image3_variant4.png'
import image14 from '../images/Carrousel/image6_variant3.png'
import image15 from '../images/Carrousel/image1_variant3.png'
import image16 from '../images/Carrousel/image3_variant5.png'
import image17 from '../images/Carrousel/image5_variant1.png'
import image18 from '../images/Carrousel/image6_variant2.png'
import image19 from '../images/Carrousel/image5.png'
import image20 from '../images/Carrousel/image6.png'
import image21 from '../images/Carrousel/image1_variant5.png'

let firstRow = [
  { src: image1, alt: 'image1' },
  { src: image2, alt: 'image2' },
  { src: image3, alt: 'image3' },
  { src: image4, alt: 'image4' },
  { src: image5, alt: 'image5' },
  { src: image6, alt: 'image6' },
  { src: image7, alt: 'image7' },
]

let secondRow = [
  { src: image8, alt: 'image8' },
  { src: image9, alt: 'image9' },
  { src: image10, alt: 'image10' },
  { src: image11, alt: 'image11' },
  { src: image12, alt: 'image12' },
  { src: image13, alt: 'image13' },
  { src: image14, alt: 'image14' },
]

let thirdRow = [
  { src: image15, alt: 'image15' },
  { src: image16, alt: 'image16' },
  { src: image17, alt: 'image17' },
  { src: image18, alt: 'image18' },
  { src: image19, alt: 'image19' },
  { src: image20, alt: 'image20' },
  { src: image21, alt: 'image21' },
]

const Product = () => {
  return (
    <div className="  w-[300px] sm:w-[500px] md:w-[750px] lg:w-[900px] xl:w-[1050px] max-w-[1050px] mx-auto">
      <div className="slider">
        <div className="slide-track">
          {firstRow.map((item, index) => (
            <div className="slide" key={index}>
              <Image src={item.src} alt={item.alt} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="slider-reverse">
        <div className="slide-track">
          {secondRow.map((item, index) => (
            <div className="slide" key={index}>
              <Image src={item.src} alt={item.alt} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="slider">
        <div className="slide-track">
          {thirdRow.map((item, index) => (
            <div className="slide" key={index}>
              <Image src={item.src} alt={item.alt} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
