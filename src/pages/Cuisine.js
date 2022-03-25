import React, { useState, useEffect } from "react";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//api
import { getCuisine } from "../services/api";
//framer-motion
import { motion } from "framer-motion";

//styled-components
import styled from "styled-components";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  console.log(cuisine);
  useEffect(() => {
    const fetchApi = async () => {
      setCuisine(await getCuisine(params.type));
    };

    return fetchApi();
  }, [params.type]);

  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity: 0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            
            </Link>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
