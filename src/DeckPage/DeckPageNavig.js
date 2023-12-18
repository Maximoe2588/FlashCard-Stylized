import React from "react";
import { FaHome } from 'react-icons/fa';


function DeckPageNavig({deck}){
  return (
        <div className="container-navigation">
          <nav>
           <ol>
             <li className="breadcrumb primary"><a href="/"> <FaHome className="faHome" />Home</a></li>
             <li className="breadcrumb secondary">Deck: {deck.name}</li>
           </ol>
         </nav>
       </div>
 );
}

export default DeckPageNavig;