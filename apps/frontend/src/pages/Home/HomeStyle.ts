import styled from 'styled-components';

export const ProductsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const ProductContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: #fff;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;

`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

  button {
    color: white;
    width: 100%;
    border: none;
    cursor: pointer;
    position: relative;
  }
  
  button:nth-child(1) {
    border-radius: 6px 0 0 0;

    background-color: #21DD91;
    padding: 0.5rem;
  }

  button:nth-child(1)::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #444;
    right: 0;
    top: 0;
  }

  
  button:nth-child(2) {
    border-radius: 0 6px 0 0;
    background-color: #21DD91;
    padding: 0.5rem;
  }
`;
