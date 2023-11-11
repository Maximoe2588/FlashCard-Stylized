import React from "react";



function EditCardNavig({card, deck, deckId}){
  
  return (
    <div className="container">
     <nav>
       <ol>
         <li className="breadcrumb-primary"><a href="/">Home</a></li>
           <li className="breadcrumb-primary"><a href={`/decks/${deckId}`}>Deck {deck.name}</a></li>
           <li className="breadcrumb-secondary">Edit Card {card.id}</li>
        </ol>
     </nav>
   </div>
  
  );
}

export default EditCardNavig;