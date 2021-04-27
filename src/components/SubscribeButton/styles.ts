import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  width: 260px;
  height: 4rem;
  border-radius: 2rem;
  background: var(--yellow-500);
  color: var(--gray-900);
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
