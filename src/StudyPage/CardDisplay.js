import "./CardDisplay.css"
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function CardDisplay({ deck }) {

    const cards = deck.cards;
    const [cardId, setCardId] = useState(1);
    const [flipped, setFlipped] = useState(false);
    const [card, setCard] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        const abortController = new AbortController();
        setCard({...cards[cardId-1]});
        return () => abortController.abort();
    }, [cardId, cards]);

    const handleFlip = () => {
        setFlipped(true);
    };

    const handleNext = () => {
        if (flipped === true && cardId === cards.length) {
            
            if (window.confirm("Restart cards?\nClick 'cancel' to return to the home page.")) {
                setCardId(1);
                setFlipped(false);
        
            }else {
                history.push("/");
            }
        }

            else{
        
                setCardId(cardId + 1);
    
                setFlipped(false);
            }
    };


if (!cards) {
    return <p>Loading...</p>
}else if (cards.length > 2) {

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-num-navig">Card {cardId} of {cards.length}</h5>
                        {!flipped ? (<p className="card-text">{card.front}</p>) : (<p className="card-text">{card.back}</p>)}
                    <button className="btn" onClick={handleFlip}>Flip</button>
                    {flipped && (<button className="btn" onClick={handleNext}>Next</button>)}
                </div>
            </div>
        </div>
    );  
} else {
    return (
        <div className="container">
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <a href={`/decks/${deck.id}/cards/new`} className="btn">+ Add Cards</a>
        </div>
    );
}


}
export default CardDisplay;