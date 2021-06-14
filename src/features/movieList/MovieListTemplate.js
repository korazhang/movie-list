import React from "react";
import { useDispatch } from "react-redux";
import styles from "./MovieListContainer.module.css";

export default function MovieListTemplate(props) {
  const { movieList, handleClick, lsitName } = props;
  const dispatch = useDispatch();

  return movieList.map((movie) => (
    <div key={movie.id} className={styles.imgListContainer}>
      <img src={movie.img} alt={movie.title} className={styles.imgContainer} />
      <label className={styles.movieTtile}>{movie.title}</label>
      <button
        onClick={() => dispatch(handleClick(movie))}
        className={styles.actionButton}
      >
        {lsitName === "myList" ? "Remove" : "Add"}
      </button>
    </div>
  ));
}
