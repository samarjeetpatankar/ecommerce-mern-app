import React from "react";
import styles from "./SubHeader.module.css";
import { Link } from "react-router-dom";
import { subHeaderData } from "../Assets/SubHeaderData";

const SubHeader = () => {
  return (
    <div className={styles.subHeaderContainer}>
      {subHeaderData.map((elem, i) => {
        return (
          <div key={i}>
            <Link
              to={`/category/${elem.linkName}`}
              className={styles.categoryLink}
            >
              <img
                src={elem.image}
                alt={elem.name}
                className={styles.categoryImage}
              />
              <p className={styles.categoryName}>{elem.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeader;
