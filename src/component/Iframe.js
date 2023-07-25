import React, { useEffect } from 'react';
import '../css/iframe.css';
export const Iframe = () => {
    const myStyle = {
        width: '100%',
        maxWidth: '100%',
        height: '100vh',
        overflow: "hidden",
        scrolling: "no"
    };
      
      useEffect(() => {
        const animateButton = function(e) {
            e.target.classList.remove('animate');
            
            e.target.classList.add('animate');
            setTimeout(function(){
              e.target.classList.remove('animate');
            },700);
          };

        const bubblyButtons = document.getElementsByClassName("right-fixed");
      
        for (var i = 0; i < bubblyButtons.length; i++) {
          bubblyButtons[i].addEventListener('click', animateButton, false);
        }    
      }, [])
      

    return (
        <div className="">
            <iframe src="https://gamma.app/embed/v7wa3yp54yh58jh" style={myStyle} className="no-scroll" title="Evolve2Digital: Empowering Your Business with Technology"></iframe>
            <button className='right-fixed'>
                <a href="mailto:alberto.carrasco@evolve2digital.com">alberto.carrasco@evolve2digital.com</a>
            </button>
        </div>
    )
}