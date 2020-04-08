import styled from "styled-components";

import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";

export const CartIconDivWrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIconWrapper = styled(CartIcon)`
  width: 36px;
  height: 36px;
`;

export const ItemCountWrapper = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  bottom: 6px;
`;
