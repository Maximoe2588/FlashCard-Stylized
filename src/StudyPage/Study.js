import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api/index";
import { useParams } from "react-router-dom";
import StudyPageNavig from "./StudyPageNavig";
import CardDisplay from "./CardDisplay";
import ErrorMessage from "../ErrorMessage";

function Study () {
    const [deck, setDeck] = useState(null);
    const [error, setError] = useState(undefined);
    const { deckId } = useParams();
    
    //! Old Code
    /*useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    }, [deckId]);*/
    //! Old Code

    useEffect(() => {
        const abortController = new AbortController();
    
        const fetchData = async () => {
            try {
                const deck = await readDeck(deckId, abortController.signal);
                    setDeck(deck);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error);
                }
            }
        };
    
        fetchData();
    
        return () => abortController.abort();
    }, [deckId]);


    if(error) {
        <ErrorMessage error={error} />
    }

    if(!deck) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <div>
                <StudyPageNavig deck={deck} />
                    <div className="container">
                        <h1>You're Studying: {deck.name}</h1>
                    </div>
                <CardDisplay deck={deck}/>
            </div>
        );
    }
}

export default Study;