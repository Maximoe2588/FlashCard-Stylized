import React from "react";


function DeckPageNavig({deck}){
  return (
        <div className="container">
          <div className="breadcrumb-container">
         <nav>
           <ol>
             <li className="breadcrumb primary"><a href="/">Home</a></li>
             <li className="breadcrumb secondary">{deck.name}</li>
           </ol>
         </nav>
         </div>
       </div>
 );
}

export default DeckPageNavig;