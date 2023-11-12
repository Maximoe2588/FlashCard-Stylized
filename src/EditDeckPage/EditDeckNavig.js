import React from "react";


function EditDeckNavig({deck}) {
    return (
        <div className="container">
            <div className="breadcrumb-container">
            <nav>
                <ol>
                    <li className="breadcrumb primary"><a href="/">Home</a></li>
                    <li className="breadcrumb primary"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb secondary">Edit Deck</li>
                </ol>
            </nav>
            </div>
        </div>
    );
}
export default EditDeckNavig;