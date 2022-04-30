import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .5rem;
  z-index: 2;
`;

export const Text = styled.span`

  cursor: pointer;
  
  ${(props) => props.theme.Regular20};
  color: ${(props) => props.theme.grey};

  &.active {
    ${(props) => props.theme.Semibold20};
    color: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
  };

`;