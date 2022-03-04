import styled from "styled-components";

export const StyledJobCard = styled.div`
  background: linear-gradient(180deg, #272727, #464545);
  color: #ffffff;
  border: 0.15rem solid white;
  border-radius: 0.5rem;
  height: 25rem;
  width: 35rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    background-color: #45b480;
    width: 100%;
    text-align: center;
  }

  h1 {
    padding: 1rem 0rem;
    font-size: 3rem;
    color: black;
  }

  h2 {
    align-self: flex-start;
    margin: 1rem 1rem;
    font-size: 1rem;
  }

  img {
    margin: 1rem 0rem;
  }

  a {
    text-decoration: none;
    color: #3ac2bb;
  }
`;

//when need to use job card, copy and paste code below in desired section and import at the top
{
  /* <StyledJobCard>
<div>
  <h1>JOB</h1>
</div>
<h2>Category: </h2>
<h2>Duration: </h2>
<h2>Location: </h2>
<h2>Description: </h2>
</StyledJobCard> */
}
