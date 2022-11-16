import styled from "styled-components";

export const PagesStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 0.2rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 0.4rem 0.6rem;
    border-radius: 8px;

    &.active,
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  }
`;
