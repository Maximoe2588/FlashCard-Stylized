import React from "react";
import { deleteDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function DeckView({ deck = { cards: [] } , decks, setDecks}) {
    const history = useHistory();

    
    const handleDelete = async() => {
    
        if(window.confirm("Delete this deck?\nYou will not be able to recover it")){
            await deleteDeck(deck.id).then(history.push("/"));
    
        const results = decks.filter((({id}) => deck.id !== id))
            
            setDecks(results);
        }

    };


/* const handleDelete = async () => {
    if (window.confirm("Delete this deck?\nYou will not be able to recover it")) {
        const results = decks.filter(({ id }) => deck.id !== id);
            try {
                await deleteDeck(deck.id);
                setDecks(results);
                history.push("/");
            } catch (error) {
            console.error(error);
            }
        }
    };*/

    return (
        <div className="card-deck">
            <div className="deck-body">
                <h5 className="deck-title">{deck.name}</h5>
                <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
                <p className="card-text">{deck.description}</p>
                <a className="btn-view" href={`/decks/${deck.id}`}>View</a> 
                <a className="btn-study" href={`/decks/${deck.id}/study`}>Study</a>
                <button className="btn-delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default DeckView;
