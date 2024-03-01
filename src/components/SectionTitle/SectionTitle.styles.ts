import styled from 'styled-components'

const Title = styled.h2`
  font-size: 3.75rem;
  margin-bottom: 1rem;
  color: var(--white);
  text-align: center;
  transition: all 0.3s ease;
  text-transform: uppercase;
  
    &:hover {
      color: var(--primary);
  }
    
  @media (max-width: 768px) {
      font-size: 2.5rem;
  }
`;

export { Title }

