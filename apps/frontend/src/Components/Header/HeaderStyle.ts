import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f2f2f2;
  color: black;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 1rem;
  
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border-radius: 4px 0 0 4px;
    outline: 1px solid #ccc;
    color: black;
    padding: 6px;
    border: none;
    background-color: #fff;
  }

  input:focus {
    outline: 1px solid #21DD91;
  }

  input::placeholder {
    color: black;
  }

  input:focus ~ button {
    outline: 1px solid #21DD91;
    border: none;
  }

  button {
    cursor: pointer;
    color: black;
    padding: 6px;
    background-color: #21DD91;
    border: none;
    outline: 1px solid #21DD91;
    border-radius: 0 4px 4px 0;
  }


  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
    text-decoration: none;
  }

  #addProducts {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }

`;
