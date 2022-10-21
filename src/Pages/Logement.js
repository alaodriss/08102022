import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Erreu404 from "../Pages/Erreur_404";
import DropDown from "../Components/DropDown";
import Tags from "../Components/Tags";
import Footer from "../Components/Footer";

function Logement() {
  let { logementId } = useParams();

  const [datalogement, setDataLogement] = useState();

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
        // setDataLogement(data);
        let r = data.logements.filter((el) => el.id === logementId);
        setDataLogement(r[0]);

        // console.log(r)
        // if(!r){
        //   return <Erreu404 />
        // }
      });
  }, []);

  //recuperation de l'id du logement depuis le url

  // console.log(logementId_slice)

  // let result ;

  // if (datalogement) {
  //    result = datalogement.logements.find((el) => () => {
  //     if (el.id === logementId_slice) {

  //       return el;

  //     }

  //   });
  // }if (datalogement && result === undefined) {
  //   return <Erreu404 />;
  // }

  let star = [1, 2, 3, 4, 5];

  return (
    datalogement && (
      <div className="div-logements">
        <div className="container-logements">
          <div className="div-title-logements">
            <div className="div-title-logements-city">
              <p className="p-title-logements">{datalogement.title}</p>
              <p className="p-location">{datalogement.location}</p>
            </div>
            <div className="div-tag-logement">
              {datalogement.tags.map((item, index) => {
                return <Tags tag={item} key={"tag" + index} />;
              })}
            </div>
          </div>
          <div className="div-name-star-logement">
            <div className="host-name-logement">
              <p>{datalogement.host.name}</p>
              <img src={datalogement.host.picture} alt="" />
            </div>
            <div className="div-star-logement">
              {star.map((item, index) => {
                return item <= datalogement.rating ? (
                  <i
                    key={"key-etoile" + index}
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

        <div className="list-dropdown">
          <div className="container-dropdown">
            <DropDown title="Description" text={datalogement.description} />
          </div>
          <div className="container-dropdown">
            <DropDown
              title="Equipements"
              text={datalogement.equipments.map((item, index) => {
                return <p key={"p" + index}>{item}</p>;
              })}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}
export default Logement;
