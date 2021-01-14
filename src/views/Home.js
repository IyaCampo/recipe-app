import React from 'react';
import Recipe from './Recipe';
import SearchRecipe from './SearchRecipe';

function Home() {
    return (
        <div>
            <header className="text-center">
                <h1>Recipe App</h1>
                <h5>Search for the best recipes in town. ♡</h5>
                <SearchRecipe />
            </header>
            <Recipe />
        </div >
    );
}

export default Home;