import styled from "styled-components";

import CustomButtonWrapper from "../custom-button/custom-button.styles";

const getImageWrapperBackground = ({imageUrl}) => `background-image: url('${imageUrl}')`;

export const CollectionItemWrapper = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;


  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${getImageWrapperBackground}
`;

export const CustomButtonDivWrapper = styled(CustomButtonWrapper)`
  width: 50%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionFooterWrapper = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameWrapper = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceWrapper = styled.span`
  width: 10%;
`;
