import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5rem;
`;
export const Button = styled.button`
  svg {
    path {
      stroke: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
    }
  }
`;