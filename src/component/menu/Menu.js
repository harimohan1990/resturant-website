import React, { useState } from 'react';
import './Menu.css';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa'; // Importing icons

import friedRice from '../../images/fried rice.jpg';
import momos from '../../images/momos.jpg';
import ricebolws from '../../images/rice bowls.jpg'
import soup from '../../images/snacks.jpg'
// Sample data for menu items with placeholders for images
const menuItems = [
  { name: "Burgers", price: "RS.150", img: friedRice },
  { name: "Momos", price: "RS.150", img:momos },
  { name: "Soup", price: "RS.150", img:ricebolws  },
  { name: "Maggie", price: "RS.150", img: soup},
  
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className='Menu_wrapper'>
      <div>
        <ul>
         <h1>Desi Bolws</h1>
          <li><FaInstagram /> Instagram</li>
          <li><FaFacebookSquare /> Facebook</li>
          <li><FaTwitter /> Twitter</li>
        </ul>
      </div>
      <header>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => handleClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>&times;</span>
            <h2>{selectedItem.name} - {selectedItem.price}</h2>
            <img src={selectedItem.img} alt={selectedItem.name} style={{ width: "100%", height: "auto" }} />
            
          </div>
        </div>
      )}
    </div>
  );
}
