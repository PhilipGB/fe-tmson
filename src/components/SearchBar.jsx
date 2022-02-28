import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBar = () => {
   
  const [searchTerm, setSearchTerm] = useState('')

console.log(searchTerm)
// add function to search button that takes to new page - showing filtered searches only.

  return (
    <StyledForm>
      <input type="text" value={searchTerm} onInput={e => setSearchTerm(e.target.value)}/>
      <select name="" id="">
        <option value="filter" disabled="disabled">
          Filter
        </option>
        <option value="filter">Distance</option>
        <option value="filter">Availability</option>
      </select>
      <select name="" id="">
        <option value="sort" disabled="disabled">
          Sort By
        </option>
        <option value="sort">Advert Age</option>
        <option value="sort">Rating</option>
      </select>
      <Link to={`/search-results?q=${searchTerm}`}>
      <button>Search</button>
      </Link>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  input {
    padding: 0.5rem 0rem;
    width: 20rem;
  }
  button {
    margin: 0rem 0.5rem;
  }
  select {
    padding: 0.4rem 3rem;
    margin: 0rem 0.3rem;
  }
`;
export default SearchBar;
