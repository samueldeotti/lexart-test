import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  `;

export const Form = styled.form`
  color: black;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  padding: 40px 80px;
  padding-bottom: 90px;
  border-radius: 20px;
  width: 50%;
  max-width: 400px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.30);

  h1 {
    font-size: 48px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  button {
    background-color: #21DD91;
    cursor: pointer;
    margin-top: 30px;
    font-size: 16px;
    border-radius: 12px;
    border: none;
    display: inline-block;
    padding: 16px 2px;
    width: 100%;
    color: black;
    font-weight: bold;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.30);
  }

  span {
    margin-top: 10px;
    align-self: flex-start;
  }

  #invalidSpan {
    color: red;
    font-weight: bold;
  }

  #loading {
    font-size: 24px;
    align-self: center;
  }

`;

export const LinkSpan = styled(Link)`
  color: #21DD91;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #21DD91;
  }

`;
