import React from 'react'
import Image from 'next/image'
import image1 from '../images/Carrousel/image1_variant1.png'
import image2 from '../images/Carrousel/image2.png'
import image3 from '../images/Carrousel/image3.png'
import image4 from '../images/Carrousel/image1_variant6.png'
import image5 from '../images/Carrousel/image2_variant1.png'
import image6 from '../images/Carrousel/image3_variant2.png'
import image7 from '../images/Carrousel/image1.png'
import image8 from '../images/Carrousel/image3_variant1.png'
import image9 from '../images/Carrousel/image4.png'
import image10 from '../images/Carrousel/image6_variant1.png'
import image11 from '../images/Carrousel/image3_variant3.png'
import image12 from '../images/Carrousel/image1_variant2.png'
import image13 from '../images/Carrousel/image3_variant4.png'
import image14 from '../images/Carrousel/image6_variant3.png'
import image15 from '../images/Carrousel/image1_variant3.png'
import image16 from '../images/Carrousel/image3_variant5.png'
import image17 from '../images/Carrousel/image5_variant1.png'
import image18 from '../images/Carrousel/image6_variant2.png'
import image19 from '../images/Carrousel/image5.png'
import image20 from '../images/Carrousel/image6.png'
import image21 from '../images/Carrousel/image1_variant5.png'

const Carrousel = () => {
  return (
    <section className="carousel">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <div className="carousel__wrapper">
              <SliderOnRepeat />
              <SliderOnRepeat />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrousel

const SliderOnRepeat = () => {
  return (
    <>
      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image1} />
        </div>
        <div className="carousel__image">
          <Image src={image2} />
        </div>
        <div className="carousel__image">
          <Image src={image3} />
        </div>
      </div>

      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image4} />
        </div>
        <div className="carousel__image">
          <Image src={image5} />
        </div>
        <div className="carousel__image">
          <Image src={image6} />
        </div>
      </div>

      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image7} />
        </div>
        <div className="carousel__image">
          <Image src={image8} />
        </div>
        <div className="carousel__image">
          <Image src={image9} />
        </div>
      </div>

      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image10} />
        </div>
        <div className="carousel__image">
          <Image src={image11} />
        </div>
        <div className="carousel__image">
          <Image src={image12} />
        </div>
      </div>

      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image13} />
        </div>
        <div className="carousel__image">
          <Image src={image14} />
        </div>
        <div className="carousel__image">
          <Image src={image15} />
        </div>
      </div>
      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image16} />
        </div>
        <div className="carousel__image">
          <Image src={image17} />
        </div>
        <div className="carousel__image">
          <Image src={image18} />
        </div>
      </div>

      <div className="carousel__slide carousel__slide__reverse">
        <div className="carousel__image">
          <Image src={image19} />
        </div>
        <div className="carousel__image">
          <Image src={image20} />
        </div>
        <div className="carousel__image">
          <Image src={image21} />
        </div>
      </div>
    </>
  )
}
