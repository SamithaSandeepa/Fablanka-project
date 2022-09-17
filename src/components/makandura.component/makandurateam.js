import Styles from "./makandura.module.css";
import React, { useEffect, useState } from "react";
import { datamaknadurateam } from "../data_makandurateam";

const MakanduraTeam = () => {
  return (
    <div className="flex justify-center">
      <div className={Styles.container}>
        {datamaknadurateam.map((user) => {
          return (
            <div className={Styles.card_item} key={user.id}>
              <a className="no-underline" href="#">
                <div className={Styles.card_inner}>
                  <img src={user.image} />
                  <div className={Styles.userName}>{user.name}</div>
                  
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MakanduraTeam;
