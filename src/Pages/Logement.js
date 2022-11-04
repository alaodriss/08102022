import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Erreu404 from "../Pages/Erreur_404";
import DropDown from "../Components/DropDown";
import Tags from "../Components/Tags";
import Footer from "../Components/Footer";
import Lightbox from "../Components/Lightbox";

import "../Styles/Logement.css";

function Logement() {
  let { logementId } = useParams();

  const [datalogement, setdatalogement] = useState();

  useEffect(() => {
    fetch("../data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdatalogement(data);
      });
  }, []);

  let result;

  if (datalogement) {

    result = datalogement.logements.find((el) => {

      if(el.id === logementId) {
        return el ;
      }
    });
    
  }

  if (datalogement && result === undefined) {
    return <Erreu404 />;
  }

  // if (logementId !== result ) {
  //  return <Erreu404 />
  //}

  //recuperation de l'id du logement depuis le url (aprés le ?)

  let star = [1, 2, 3, 4, 5];

  return (
    datalogement && (
      <div className="div-logements">
        <Lightbox
          data={result.pictures}
          image={result.pictures[0]}
        />
        <div className="container-logements">
          <div className="div-title-logements">
            <div className="div-title-logements-city">
              <p className="p-title-logements">{result.title}</p>
              <p className="p-location">{result.location}</p>
            </div>
            <div className="div-tag-logement">
              {result.tags.map((item, index) => {
                return <Tags tag={item} key={"tag" + index} />;
              })}
            </div>
          </div>
          <div className="div-name-star-logement">
            <div className="host-name-logement">
              <p>{result.host.name}</p>
              <img src={result.host.picture} alt="" />
            </div>
            <div className="div-star-logement">
              {star.map((item, index) => {
                return item <= result.rating ? (
                  <i
                    key={"key-etoile" + index}
                    style={{ color: "#FF6060" }}
                    className=" fa fa-solid fa-star"
                  ></i>
                ) : (
                  <i
                    key={"key-etoile" + index}
                    style={{ color: "#E3E3E3" }}
                    className=" fa fa-solid fa-star"
                  ></i>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container-apropos">
          <div className="list-dropdown">
            <div className="container-dropdown">
              <DropDown title="Description" text={result.description} />
            </div>
            <div className="container-dropdown">
              <DropDown
                title="Equipements"
                text={result.equipments.map((item, index) => {
                  return <p key={"p" + index}>{item}</p>;
                })}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}
export default Logement;
