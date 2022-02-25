import React from "react";
import styled from "styled-components";
const SearchBar = () => {
  return (
    <StyledForm>
      <input type="text" />
      <button>Search</button>
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
