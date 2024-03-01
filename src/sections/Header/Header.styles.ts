import styled from 'styled-components'

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  object-fit: cover;
  object-position: 50% 50%;
  transition: all 0.3s ease;
  &:hover {
      transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  color: var(--white);
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
      color: var(--primary);
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--white);
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
      color: var(--primary);
  }
`;

export { Image, Title, Subtitle }

