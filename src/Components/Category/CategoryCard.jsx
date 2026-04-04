import React from 'react'
import classes from "./Catagory.module.css"
import {Link} from "react-router-dom"

function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      <a href={data?.link} className={classes.category_link}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={data?.title} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
