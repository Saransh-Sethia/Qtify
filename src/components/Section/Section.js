import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";

const Section = ({
   title,
   data, 
   type, 
   value,
   filteredData=null,
   filteredDataValues=[],
   toggle=false,
   handleToggle=null,
   handleChange
   }) => {
  // const [carouselToggle, setCarouselToggle] = useState(true);

  // const handleToggle = () => {
  //   setCarouselToggle(!carouselToggle);
  // };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggle?"Show All":"Collapse All"}
        </h4>
      </div>
      {type==="songs" ? <BasicTabs value={value} handleChange={handleChange} /> : null}
      {data.length === 0 ? (
        <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
        <CircularProgress />
        </Box>
      ) : 
        <div className={styles.cardWrapper}>
          {toggle? 
            <div className={styles.wrapper}>
              {
              filteredDataValues.map((item) => {
                return(
                <Card data={item} type={type} />
                )
   })}
            </div>
           : (
            <Carousel data={filteredDataValues} renderCardComponent={(data) => <Card data={data} type={type} />}/>
          )} 
        </div>
      }
    </div>
  );
};

export default Section;
