import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  background: transparent;
  color: var(--white);
  font-size: 1rem;
  margin: 5px;
  transition: all 0.3s ease;
  box-shadow: none;
  border: 1px solid var(--white);
    
  &:hover {
      background-color: var(--primary);
  }
  span {
    margin-left: 10px;
  }
`;

export { Button }
