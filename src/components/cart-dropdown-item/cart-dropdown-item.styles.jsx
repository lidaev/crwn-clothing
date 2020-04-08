import styled from "styled-components";

const getImageBackground = ({imageUrl}) => `background-image: url('${imageUrl}')`;

export const CartDropdownItemWrapper = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
`;

export const PhotoWrapper = styled.div`
  height: 70px;
  width: 50px;
  background-size: cover;

  ${getImageBackground}
`;

export const ItemInfoWrapper = styled.div`
  margin-left: 16px;
  font-size: 18px;
`;

export const TitleWrapper = styled.div`
  font-size: 20px;
`;
