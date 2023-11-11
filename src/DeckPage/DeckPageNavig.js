import React from "react";


function DeckPageNavig({deck}){
  return (
        <div className="container">
         <nav>
           <ol>
             <li className="breadcrumb primary"><a href="/">Home</a></li>
             <li className="breadcrumb secondary">{deck.name}</li>
           </ol>
         </nav>
       </div>
 );
}

export default DeckPageNavig;