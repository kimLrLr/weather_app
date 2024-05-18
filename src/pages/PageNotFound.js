import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    0deg,
    rgba(191, 137, 255, 1) 0%,
    rgba(173, 173, 255, 1) 30%,
    rgba(155, 238, 255, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  padding: 10%;
  color: white;
  text-align: center;
`;

const BtnWrap = styled.button`
  width: 40%;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: #fff;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;

  a {
    color: #1d1d1d;
    line-height: 40px;
    text-decoration: none;
  }

  &:hover {
    background: #545e81;
    transition: 0.5s;

    a {
      color: #fff;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <Text>
        404,
        <br /> PAGE NOT FOUND
      </Text>
      <BtnWrap>
        <Link to={"/"}>Main</Link>
      </BtnWrap>
    </Wrap>
  );
};
