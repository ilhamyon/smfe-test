import { BackgroundOverlay, BannerStyled, Main, Divider } from "./index.style";

const Banner = ({ text, subText, image }) => {
  return (
    <BannerStyled image={image}>
      <BackgroundOverlay />
      <Main>
        <h1>{text}</h1>
        <p>{subText}</p>
      </Main>

      <Divider>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 135.42">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
              <polygon
                className="cls-1"
                points="0 135.42 1280 135.42 1280 0 0 116.67 0 135.42"
              />
            </g>
          </g>
        </svg>
      </Divider>
    </BannerStyled>
  );
};

export default Banner;
