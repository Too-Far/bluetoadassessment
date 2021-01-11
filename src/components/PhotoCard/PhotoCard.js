import React from "react";
import styles from "./PhotoCard.module.css";

function PhotoCard(props) {
  return (
    <div>
      <img src={props.url} alt={props.alt} className={styles.image} />
    </div>
  );
}

export default PhotoCard;
