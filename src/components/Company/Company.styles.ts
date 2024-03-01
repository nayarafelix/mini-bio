import styled from 'styled-components'

const CompanyArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

const CompanyName = styled.h3`
  color: var(--white);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const CompanyTime = styled.p`
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export { CompanyArea, CompanyName, CompanyTime }
