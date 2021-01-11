import React, { useState, useEffect } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import styles from "./PhotoDisplay.module.css";

function PhotoDisplay(props) {
  const [photos, setPhotos] = useState(props.photos);

  useEffect(() => {
    setPhotos(props.photos);
  }, [props.photos]);

  return (
    <div className={styles.wrapper}>
      {photos !== undefined ? (
        photos.map((photo) => (
          <PhotoCard url={photo.url} alt={photo.altDesc} key={photo.id} />
        ))
      ) : (
        <div>No photos to display: </div>
      )}
    </div>
  );
}

export default PhotoDisplay;
