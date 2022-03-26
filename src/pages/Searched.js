import React, { useState, useEffect } from "react";

//react-router-dom
import { useParams, Link } from "react-router-dom";

//api
import { getSearched } from "../services/api";

//styled-components
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 3rem;

  @media (max-width: 500px) {
    gap: 2rem;
  }
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

const Searched = () => {
  const [searched, setSearched] = useState([]);

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setSearched(await getSearched(params.search));
    };
    return fetchData();
  }, [params.search]);

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Searched;
