import styled from 'styled-components'

const CardArea = styled.div`
  border: 1px solid var(--white);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
      background-color: var(--primary);
      border: none;
  }
`;

const Area = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--white);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Position = styled.div`
    color: var(--white);
    font-size: 1rem;
    font-weight: bold;
`;

const Period = styled.p`
  color: var(--white);
  font-size: 0.8rem;
`;

const Description = styled.p`
  color: var(--white);
  max-width: 600px;
  margin: 0;
    p {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
`;

export { CardArea, Area, Position, Period, Description }
