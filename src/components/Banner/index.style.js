import styled from "styled-components";

export const BannerStyled = styled.header`
  height: 345px;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;
  background-color: #000;
  opacity: 0.4;
`;

export const Main = styled.main`
  color: #fff;
  text-align: center;

  position: relative;
  z-index: 2;

  h1,
  p {
    margin: 0;
  }
`;

export const Divider = styled.div`
  width: 100%;

  position: absolute;
  z-index: 2;
  bottom: 0;
  .cls-1 {
    fill: #fff;
  }
`;
