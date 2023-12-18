import React, { useState, useEffect } from "react";
import { deleteCard } from "../utils/api/index";
import { useHistory } from "react-router-dom";


function CardView({card, url, onDelete}){
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false); 
  /*const handleCardDelete = async(cardId) => {
    if(window.confirm("Delete this card?\nYou will not be ablt to recover it.")){
      await deleteCard(card.id);
    }
  };*/

  /*const handleCardDelete = async() => {
    console.log("card.id:", card.id);

    if(window.confirm("Delete this card?\nYou will not be ablt to recover it.")){
      console.log("Deleting card with ID:", card.id);
      deleteCard(card.id).then(history.push("/"));
    }
  };*/

 /* const handleCardDelete = async () => {
    if (window.confirm("Delete this card?\nYou will not be able to recover it.")) {
      console.log("Deleting card with ID:", card.id); // Log the card ID
      deleteCard(card.id)
        .then((response) => {
          console.log("Delete response:", response); // Log the response from the delete request
          history.push("/");
        })
        .catch((error) => {
          console.error("Delete error:", error); // Log any errors
        });
    }
  };
  const handleCardDelete = async () => {

    console.log(card);
    
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (!confirmDelete) return;
  
    console.log(card.id);
    deleteCard(card.id)
      .then((response) => {
        
        if (response.status === 200 || response.status === 204) {
          console.log("Card successfully deleted");
         
          history.push("/");
        } else {
          console.error("Failed to delete the card");
          alert("Failed to delete the card. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Delete error:", error);
        alert("An error occurred while deleting the card. Please try again.");
      });
  };*/


  const handleCardDelete = async () => {
    if (isDeleting) {
      
      return;
    }

    if (!card) {
      console.error("Card object is null or undefined.");
      return;
    }
    if (window.confirm("Delete this card?\nYou will not be able to recover it")) {
      try {
        setIsDeleting(true);
        await deleteCard(card.id); 
        console.log("Card successfully deleted");
        history.push("/"); 
      } catch (error) {
        console.error("Error deleting card:", error);
        if (error.response && error.response.status === 500) {
          alert("An internal server error occurred while deleting the card. Please try again later.");
        } else {
          alert("Failed to delete the card. Please try again.");
        } 
      } finally {
        setIsDeleting(false);
      }
    }
  };
  
  
  return(
  <div className="card">
     <div className="card-body">
       <div className="card-text">
       <div className="card-front">
        <p className="card-side">Front</p>
         <p>{card.front}</p>
         </div>
         <div className="card-back">
        <p className="card-side">Back</p>
         <p>{card.back}</p>
         </div>
       </div>
     </div>
       <div className="card-footer">
         <a href={`${url}/cards/${card.id}/edit`} className="btn secondary">Edit</a>
         <button className="btn" onClick={handleCardDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}</button>
       </div>
     </div>
   );
 }
export default CardView;