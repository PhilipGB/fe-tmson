import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../responsive';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);
  // add function to search button that takes to new page - showing filtered searches only.

  return (
    <StyledForm>
      <input
        type='text'
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
      />
      <select name='' id=''>
        <option value='filter' disabled='disabled'>
          Filter
        </option>
        <option value='filter'>Distance</option>
        <option value='filter'>Availability</option>
      </select>
      <select name='' id=''>
        <option value='sort' disabled='disabled'>
          Sort By
        </option>
        <option value='sort'>Advert Age</option>
        <option value='sort'>Rating</option>
      </select>
      <Link to={`/search-results?q=${searchTerm}`}>
        <button>Search</button>
      </Link>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  min-height: 6rem;
  width: 90%;
  padding-left: 17%;
  padding-right: 3%;

  input {
    padding: 1.3rem 0rem;
    width: 80%;
    background-color: black;
    color: white;
    border: 0.15rem solid #45b480;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  button {
    margin: 0rem 0.6rem;
    background-color: black;
    color: white;
    border: 0.15rem solid #45b480;
    padding: 1.3rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  select {
    padding: 1.3rem 0rem 1.3rem 2rem;
    margin: 0rem 0.3rem;
    background-color: black;
    color: white;
    border: 0.15rem solid #3ac2bb;
    border-radius: 0.5rem;
    width: 45%;
    font-size: 1rem;
  }
  #search {
    flex: 5;
  }
  #sort-filter {
    flex: 4;
  }
  /* @media ${device.tablet} {
    flex-direction: column;
  } */
`;
export default SearchBar;
