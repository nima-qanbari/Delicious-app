import React, { useState, useEffect } from "react";

//react-router-dom
import { useParams } from "react-router-dom";

//styled-components
import styled from "styled-components";

const DetaiWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  img {
    display: block;
   width: 100%;
   border-radius: 10px;
   margin-bottom: 2rem;
  }

  .active {
    background-color: red;
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
    color: #fff;
    font-size: clamp(1.1rem, 3vw, 1.5rem)
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: #fff;
  }

  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: black;
  border: 1px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: .9rem .9rem;
    margin-right: .9rem;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    padding: .5rem .5rem;
    margin-right: .6rem;
    font-weight: 500;
  }
  `;



const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
  console.log(details);

  let params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=cee0598c45ba42eba26857dd91fd65d0`
      );
      const detailData = await data.json();
      console.log(detailData)
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.id]);
  return (
    <DetaiWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
    
        <Button
          className={activeTab === "Instructions" ? "active" : ""}
          onClick={() => setActiveTab("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "Ingredients" ? "active" : ""}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "Instructions" && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}
        {activeTab === "Ingredients" && (
            <ul>
            {details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}
          </ul>
        )}
    </DetaiWrapper>
  );
};

export default Recipe;
