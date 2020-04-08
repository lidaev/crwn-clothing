import styled, {css} from "styled-components";

const getTextWrapperStyles = () => css`
  width: 23%;
`;

const getButtonStyles = () => css`
  cursor: pointer;
`;

export const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainerWrapper = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameWrapper = styled.div`
  ${getTextWrapperStyles}
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${getTextWrapperStyles}
`;

export const PriceWrapper = styled.div`
  ${getTextWrapperStyles}
`;

export const ButtonWrapper = styled.div`
  ${getButtonStyles}
`;

export const RemoveButtonWrapper = styled.div`
  padding-left: 12px;

  ${getButtonStyles}
`;
