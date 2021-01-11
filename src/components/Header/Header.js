import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import useGetPhotos from "../../hooks/useGetPhotos/useGetPhotos";
function Header(props) {
  const [photos, getPhotos] = useGetPhotos();
  const [query, setQuery] = useState();
  useEffect(() => {
    props.setPhotos(photos);
    // eslint-disable-next-line
  }, [photos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotos(query);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Sample Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          required
          className={styles.searchBox}
          placeholder="Enter search term"
        />
        <button className={styles.closeIcon} type="reset"></button>
      </form>
      <button className={styles.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Header;
