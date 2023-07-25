import React from 'react'
import '../css/Navbar.css'

export const Tooltip = ({ content, children }) => {
    const handleMouseEnter = (event) => {
      const liElement = event.target;
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = content;
      liElement.appendChild(tooltip);
    };
  
    const handleMouseLeave = (event) => {
      const liElement = event.target;
      const tooltip = liElement.querySelector('.tooltip');
      if (tooltip) {
        liElement.removeChild(tooltip);
      }
    };
  
    return (
      <div
        className="tooltip-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    );
  };