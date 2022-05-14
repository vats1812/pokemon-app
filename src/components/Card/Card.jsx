import React from "react";
import "./Card.css";
import hp from "../../assets/hp.png";
import ability from "../../assets/ability.png";
import attack from "../../assets/attack.png";
import defense from "../../assets/defense.png";
import height from "../../assets/height.png";
import weight from "../../assets/weight.png";

function Card(props) {
  return (
    <div>
      <div className="card-cont">
        <h2 className="name">{props.name}</h2>
        <img className="sprites" src={props.sprites} alt="sprites" />
        <div className="hp">
          <img src={hp} alt="hp" /> = {props.hp}
        </div>
        <div className="ability">
          <img src={ability} alt="ability" /> = {props.ability1},{" "}
          {props.ability2}
        </div>
        <div className="attack">
          <img src={attack} alt="attack" /> = {props.attack}
        </div>
        <div className="defense">
          <img src={defense} alt="defense" /> = {props.defense}
        </div>
        <div className="height">
          <img src={height} alt="height" /> = {props.height} m
        </div>
        <div className="weight">
          <img src={weight} alt="weight" /> = {props.weight} kg
        </div>
      </div>
    </div>
  );
}

export default Card;
