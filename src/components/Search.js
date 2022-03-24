import React, { useState } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";

//search-icon
import { FaSearch } from "react-icons/fa";

//styled-components
import styled from "styled-components";

const FormStyle = styled.form`
  margin: 2rem 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;


  input {
      display: block;
      padding: .3rem 2.7rem;
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: clamp(1.1rem, 3vw, 1.4rem);
      border-radius: 1rem;
      outline: none;
      color: #fff;
      width: 100%;
  
  }
  @media (max-width:500px){
    input {
        width: 95%;
        padding:.2rem 2.7rem;
    }      
  }

  svg {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(100%, -50%);
      color: #fff;
  }
`;

const Search = () => {
    const [input, setInput] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate("searched/" + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch />
      <input
       type="text"
       value={input}
       onChange={(e) => setInput(e.target.value)}
        />
    </FormStyle>
  );
};

export default Search;
