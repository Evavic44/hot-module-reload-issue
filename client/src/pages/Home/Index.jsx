import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <h1 className="text-white text-9xl">Home</h1>
      <p>Change any line or update the styling and watch this bug unfold 😓</p>
      <Link className="underline" to="/about">
        Click me to visit About
      </Link>
    </Container>
  );
}

export default Home;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: purple;
`;
