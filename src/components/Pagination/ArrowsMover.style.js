import styled from "styled-components";

export const ArrowsMoverStyled = styled.div`
  &.flip {
    .icon {
      transform: scaleX(-1);
    }
  }

  .icon {
    width: 6px;
    display: inline-block;

    cursor: pointer;

    &:not(:first-child) {
      margin-left: 8px;
    }

    &:hover {
      polygon {
        fill: red;
      }
    }

    &.arrow-double {
      width: 12px;
    }
  }
`;
