import styled, {css} from "styled-components";

import {Link} from "react-router-dom";

const OptionWrapperStyles = css`
  padding: 16px;
  font-size: 20px;
  text-decoration: none;
  color: #000000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoWrapper = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionLinkWrapper = styled(Link)`
  ${OptionWrapperStyles}
`;

export const OptionDivWrapper = styled.div`
  ${OptionWrapperStyles}
`;
