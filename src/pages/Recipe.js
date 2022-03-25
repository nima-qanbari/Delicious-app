import React, { useState, useEffect } from "react";

//react-router-dom
import { useParams } from "react-router-dom";

//styled-components
import styled from "styled-components";


const Recipe = () => {
  const [details, setDetails] = useState({});
  console.log(details)

  let params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=bf4054f952324632ac4c2a2c4f482d14`
        );
        const detailData = await data.json();
        setDetails(detailData);
      };
    fetchDetails();
  }, [params.id]);
  return (<div style={{color: "white"}}>{details.title}</div>);
};

export default Recipe;
