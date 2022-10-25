import React from "react";
import { Link } from "react-router-dom";


function LogementHome(props) {
  //ici on a reçu les données avec le props infos
  //methode de destruction
  const { title, cover, id } = props.infos;

  return (
    <Link to={`logement/${id}`}>
      <div
        style={{ backgroundSize: "cover", backgroundImage: `url(${cover})` }}
        className="container-logement-home"
      >
        <p className="title">{title}</p>
      </div>
    </Link>
  );
}

export default LogementHome;
