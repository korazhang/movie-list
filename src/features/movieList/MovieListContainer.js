import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  removeItem,
  addItem,
  getMyList,
  getRecommendation,
} from "./MovieListSlice";
import MovieListTemplate from "./MovieListTemplate";

import styles from "./MovieListContainer.module.css";

export function MovieListContainer() {
  const myList = useSelector(getMyList);
  const recommendataion = useSelector(getRecommendation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <img className={styles.icon} src="netflix.png" />
      </div>
      <div className={styles.row}>
        <label className={styles.label}>My List</label>
      </div>
      <div className={styles.row}>
        <MovieListTemplate
          handleClick={removeItem}
          movieList={myList}
          lsitName={"myList"}
        />
      </div>
      <div className={styles.row}>
        <label className={styles.label}>Recommendataion</label>
      </div>
      <div className={styles.row}>
        <MovieListTemplate
          handleClick={addItem}
          movieList={recommendataion}
          lsitName={"recommendataion"}
        />
      </div>
    </div>
  );
}
