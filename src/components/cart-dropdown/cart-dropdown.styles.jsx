import styled from "styled-components";

export const CartDropdownWrapper = styled.div`
  background-color: #ffffff;
  width: 250px;
  height: 350px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  position: absolute;
  top: 80px;
  right: 16px;
  z-index: 5;
  overflow-y: scroll;

  button {
    margin-top: auto;
  }
`;
