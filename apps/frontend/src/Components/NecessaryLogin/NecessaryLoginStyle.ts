import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f1f1f1;
    padding: 4rem;
    border-radius: 20px;
    gap: 2rem;
  
  }

  h1 {
    color: #000;
    font-weight: bold;
    font-size: 2rem;
  }

  a {
    background-color: #21DD91;
    padding: 1rem;
    border-radius: 12px;
    font-size: 2rem;
    text-decoration: none;
    color: #000;
    
    &:hover {
      text-decoration: underline;
      color: #000;
    }

    &:visited {
      color: #000;
    }

    &:visited:hover {
      color: #111;
    }
  }
`;
