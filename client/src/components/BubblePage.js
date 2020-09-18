import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then((response)=>{
        setColorList(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
