import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin: 16px 0;

  label {
    /* padding: 10px 0px; */
    width: 100%;
    left: 10px;
    position: absolute;
    transition: .3s;
  }
  
  input {
    color: black;
    width: 100%;
    background-color: #f5f5f5;
    margin-top: 5px;
    /* border: 1px solid #ccc; */
    outline: 1px solid #ccc;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    padding: 12px;
    box-sizing: border-box;
    /* outline-offset: 4px; */
  }

  input:focus {
    border: none;
    outline: 1px solid #21DD91;
  }

  input:focus ~ label {
    color: black;
    top: -16px;
    left: 4px;
    font-size: 14px;
    transition: .3s;
  }

  input:not( :placeholder-shown ) ~ label {
    top: -16px;
    left: 4px;
    font-size: 14px;
    transition: .3s;
  }

  input::placeholder {
    color: transparent
  }

`;
