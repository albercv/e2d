import React, { useState, useEffect } from 'react'
import { MyCalendar } from './MyCalendar';
import '../css/Content.css'

export const Rent = () => {

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
        console.log(`${selectedIndex} Next < 0: ${next < 0} & result = ${next < 0 ? (images.length + next) : selectedIndex + next}`);
        nextIndex = next < 0 ? (images.length + next) : selectedIndex + next;
        break;
      case images.length - 1:
        console.log(`Length: ${images.length}`)
        console.log(`${selectedIndex} Next > 0: ${next > 0} & result = ${next > 0 ? 0 : images.length + next}`)
        nextIndex = next > 0 ? 0 : selectedIndex + next;
        break;
      default:
        console.log(`${selectedIndex} result = ${selectedIndex + next}`);
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
              <img src={require(`./../assets/images/${selectedImage}`)} alt='Home Image' />
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
