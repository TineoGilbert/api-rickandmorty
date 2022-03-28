import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../functions/GetAllCharacters";

const Main = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getAllCharacters(setCharacters);
  }, []);
  return (
    <>
      {characters != null
        ? characters.map((character) => (
            <div key={character.id}>
              <div class="card mt-5">
                <div class="card-header"></div>
                <div class="card-body">
                  <h2 class="card-title">{character.name}</h2>
                  <p class="card-text">
                    
                  </p>
                  <a href={`/character/${character.id}`} class="btn btn-dark">
                    View Character
                  </a>
                </div>
              </div>
            </div>
          ))
        : "there is no date"}
    </>
  );
};

export default Main;
