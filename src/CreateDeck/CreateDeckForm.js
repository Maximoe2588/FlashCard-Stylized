import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";



function CreateDeckForm(){
  const initialFormState = {
    name: "",
    description: "",
  };

  const history = useHistory();
  
  const[formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  };
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createDeck(formData); 
    setFormData({ ...initialFormState}); 
    history.push("/");
  };
        
        
  return (
      <div className="create-container">
        <h3> Create New Deck</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-type">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="form-control"
                name="name"
                placeholder="Deck Name"
                value={formData.name}
                onChange={handleChange}>
              </input>
             </div>
            <div className="form-type">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                placeholder="Brief description of the deck"
                row={9}
                value={formData.description}
                onChange={handleChange}>
              </textarea>
            </div>
            <a href="/" className="btn secondary">Cancel</a>
            <button type="submit"className="btn primary">Submit</button>
          </form>
      </div>
     );
    }
             

export default CreateDeckForm;