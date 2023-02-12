import "./StudyPageNavig.css"
import React from "react";

function StudyPageNavig({deck}){
  
  return (

<div className="container-navigation">
  <nav>
    <ol>
      <li className="breadcrumb primary"><a href="/">Home</a></li>
      <li className="breadcrumb primary"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
      <li className="breadcrumb secondary">Study</li>
    </ol>
  </nav>
</div>
  );
}

export default StudyPageNavig;