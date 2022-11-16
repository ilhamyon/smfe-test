import styled from "styled-components";
export const Post = styled.div`
  color: #000;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;

  a {
    color: inherit;

    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 155px;

  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const Main = styled.main`
  height: 155px;
`;

export const DateText = styled.span`
  color: #999999;
`;
export const Title = styled.h3`
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
