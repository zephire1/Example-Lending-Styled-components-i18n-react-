import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleText = styled.div`

  ${(props) => props.theme.Semibold20A1};
  color: ${(props) => props.theme.theme === 'dark' ? props.theme.white : props.theme.dark};

  text-transform: uppercase;
  margin-left: 7.2rem;
  margin-top: 1.8rem;
`;