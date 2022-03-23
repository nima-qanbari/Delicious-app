import React, { useEffect, useState } from "react";

//splide
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
//api
import { getPopular } from "../services/api";

//styled-components
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 11rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
`

const Popular = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchApi = async () => {
      const check = localStorage.getItem("popular")

      if(check){
        setData(JSON.parse(check))
      }
      setData(await getPopular());
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide 
        options={{
           perPage: 4 ,
           arrows:false,
           pagination:false,
           drag: "free",
           gap: "2.5rem",
           }}>
          {data.map((item) => {
            return (
              <SplideSlide key={item.recipe.label}>
                <Card>
                  <p>{item.recipe.label}</p>
                  <img src={item.recipe.image} alt={item.recipe.label} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
