import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 6.4rem;
  height: 3.2rem;
  border-radius: 2rem;
  background: ${(props) => props.theme.white};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    background: ${(props) => props.theme.dark};
    border: .2rem solid ${(props) => props.theme.white};
    transition: .3s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.dark};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 3.2rem;
      height: 3.2rem;
      margin-left: 3rem;
      transition: .3s;
      background: ${(props) => props.theme.white};
      border: .2rem solid ${(props) => props.theme.dark};
    }
  }
`;