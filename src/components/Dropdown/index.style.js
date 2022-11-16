import styled from "styled-components";

const grey = "#cccccc";

export const DropdownStyled = styled.div`
  justify-content: space-between;
  display: inline-block;
  position: relative;

  background-color: #fff;
`;

export const Button = styled.div`
  padding: 0.8rem 1.2rem;

  border: 0;
  border-radius: 100px;

  user-select: none;
  cursor: pointer;

  border: 1px solid ${grey};
  &.active {
    border-bottom: 1px solid ${grey};
    border-radius: 1rem 1rem 0 0;
  }

  > * {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 60px;
    }
  }
`;

export const Icon = styled.div`
  width: 12px;

  transition: transform 0.3s ease-in-out;

  &.active {
    transform: rotate(180deg);
  }
`;

export const Items = styled.ul`
  width: 100%;

  padding: 0;
  margin: 0;
  list-style: none;

  background-color: #fff;

  border: 1px solid ${grey};
  border-radius: 0 0 1rem 1rem;

  overflow: hidden;

  position: absolute;
  z-index: 3;
`;

export const Item = styled.li`
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
