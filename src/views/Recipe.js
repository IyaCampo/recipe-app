import React from 'react';

function Recipe() {
    return (
        <div>
            <div className="recipe-book">
                <div className="card recipe">
                    <div className="preview" style={{ backgroundImage: "url('/img/banana-split.jpeg')" }}></div>
                    <h3 className="name">Banana Split</h3>
                    <p className="desc">
                        1. Donut candy muffin cake.
                        <br></br>2. Chupa chups wafer.
                        <br></br>3. Apple pie cake tiramisu.
                    </p>
                </div>
                <div className="card recipe">
                    <div className="preview" style={{ backgroundImage: "url('/img/strawberry-cake.jpg')" }}></div>
                    <h3 className="name">Strawberry Cake</h3>
                    <p className="desc">
                        1. Donut candy muffin cake.
                        <br></br>2. Chupa chups wafer.
                        <br></br>3. Apple pie cake tiramisu.
                    </p>
                </div>
                <div className="card recipe">
                    <div className="preview" style={{ backgroundImage: "url('/img/donuts.jpg')" }}></div>
                    <h3 className="name">Donuts</h3>
                    <p className="desc">
                        1. Donut candy muffin cake.
                        <br></br>2. Chupa chups wafer.
                        <br></br>3. Apple pie cake tiramisu.
                    </p>
                </div>
                <div className="card recipe">
                    <div className="preview" style={{ backgroundImage: "url('/img/cupcakes.jpg')" }}></div>
                    <h3 className="name">Cupcakes</h3>
                    <p className="desc">
                        1. Donut candy muffin cake.
                        <br></br>2. Chupa chups wafer.
                        <br></br>3. Apple pie cake tiramisu.
                    </p>
                </div>
                <div className="card recipe">
                    <div className="preview" style={{ backgroundImage: "url('/img/waffles.jpg')" }}></div>
                    <h3 className="name">Waffles</h3>
                    <p className="desc">
                        1. Donut candy muffin cake.
                        <br></br>2. Chupa chups wafer.
                        <br></br>3. Apple pie cake tiramisu.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Recipe;