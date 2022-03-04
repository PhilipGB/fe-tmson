import React from 'react';
import Carousel from './Carousel';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
      <Carousel />
      <div className='footer'>
        <h2>&copy;2022 The Mutated States Of Northcodia</h2>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  overflow: hidden;
  background-color: black;
  height: 90vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;

  @media screen and (min-width: 1024px) {
  }
  .footer {
    margin-top: 2rem;
    width: 100vw;
    height: 11vh;
    background-color: #45b480c7;
    color: white;
    text-indent: 1rem;
    text-align: center;
    padding-top: 2rem;
  }
`;

export default Home;
