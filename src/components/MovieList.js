import React, { useState } from "react";

const MovieList = (props) => {
    return (
        <div>
            {
                props.data.map((a) => (
                        <div>
                            <h2>{a.Title}</h2>
                            <p>{a.Year}</p>
                            <img src={a.Poster}/>
                        </div>
                    )
                )
            }
        </div>
    )
}
export default MovieList;