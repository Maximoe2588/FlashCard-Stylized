import React from "react";


function EditDeckNavig({deck}) {
    return (
        <div className="container">
            <nav>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li>Edit Deck</li>
                </ol>
            </nav>
        </div>
    );
}
export default EditDeckNavig;