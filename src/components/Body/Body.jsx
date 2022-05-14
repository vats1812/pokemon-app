import axios from "axios";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

import "./Body.css";
import srch from "../../assets/srch.png";
import Card from "../Card/Card";
function Body() {
  const [name, setName] = useState("");

  let [pokemon, setPokemon] = useState("");
  let [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);

  function handleChange(e) {
    setName(e.target.value);
  }
  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => {
        setProgress(90);
        setPokemon({
          name: res.data.name,
          img: res.data.sprites.other.dream_world.front_default,
          hp: res.data.stats[0].base_stat,
          ability1: res.data.abilities[0].ability.name,
          ability2: res.data.abilities[1].ability.name,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          height: res.data.height/10,
          weight: res.data.weight/10,
        });
        setStatus(res.status); // 200, 404, 500
        setProgress(100);
      })
      .catch((err) => {
        setStatus(err.response.status);
        setProgress(100);
      });
  };
  function handleSearch(e) {
    setProgress(30);
    fetchPokemon();
    setProgress(60);
  }
  return (
    <div>
      <LoadingBar
        color="#fff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="body_cont">
        <div className="srch">
          <input
            type="text"
            placeholder="Type Pokemon Name"
            onChange={handleChange}
          />
          <button onClick={handleSearch}>
            <img src={srch} alt="srch" />
          </button>
        </div>
        <div className="content">
          {name === "" ? (
            <div className="errormsg">
              <h1>Enter Name to Search Pokemon</h1>
            </div>
          ) : status === 404 ? (
            <div className="errormsg">
              <h1>Pokemon Not Found</h1>
            </div>
          ) : pokemon.name === undefined ? (
            ""
          ) : (
            <Card
              name={pokemon.name}
              sprites={pokemon.img}
              hp={pokemon.hp}
              ability1={pokemon.ability1}
              ability2={pokemon.ability2}
              attack={pokemon.attack}
              defense={pokemon.defense}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
