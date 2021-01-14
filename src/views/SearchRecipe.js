import React from 'react';

function SearchRecipe() {
    return (
        <div>
            <div className="input-group">
                <input type="text" className="form-control form-control-md" placeholder="What are you craving?" />
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    );
}

export default SearchRecipe;