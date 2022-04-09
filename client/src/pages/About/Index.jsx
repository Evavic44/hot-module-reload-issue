import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function About() {
  return (
    <Container className="flex justify-center align-center">
      <h1>About</h1>
      <Link className="underline" to="/">
        Go back Homes
      </Link>
    </Container>
  );
}

export default About;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: orangered;
  color: white;

  h1 {
    font-family: var(--fontSecondary);
    font-size: 9rem;
  }
`;
