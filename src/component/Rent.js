import React, { useState } from 'react'
import { MyCalendar } from './MyCalendar';
import '../css/Content.css'
import '../css/Carousel.css'

export const Rent = () => {

  //TODO download images urls from server
  const images = [
    "piso1.jpeg",
    "piso2.jpeg",
    "piso3.jpeg",
    "piso4.jpg",
    "piso5.avif",
    "piso6.jpeg",
    "piso7.jpeg",
  ]

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0])


  const selectNewImage = (next) => {
    let nextIndex = 0
    console.log(`Next ${next}`)
    switch (selectedIndex) {
      case 0:
        nextIndex = next < 0 ? (images.length + next) : selectedIndex + next;
        break;
      case images.length - 1:
        nextIndex = next > 0 ? 0 : selectedIndex + next;
        break;
      default:
        nextIndex = selectedIndex + next;
        break;
    }

    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
  }

  return (
    <>
      <section className='sectionPart'>
        <article className='carousel'>
          <button onClick={e => selectNewImage(-1)}>{"<"}</button>
          <div className='photos'>
            <div className='imageContainer'>
              <img src={require(`./../assets/images/${selectedImage}`)} alt='Home' />
              <p className='imageCounter'>{`${selectedIndex + 1} de  ${images.length}`}</p>
            </div>
          </div>
          <button onClick={e => selectNewImage(1)}>{">"}</button>
        </article>
      </section>
      <section className='sectionPart'>
          <MyCalendar />
      </section>
    </>
  )
}
