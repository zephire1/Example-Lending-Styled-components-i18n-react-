import styled from "styled-components";

export const Wrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin-top: 2rem;
  svg {
    path {
      fill: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
    }
  }
`;

export const Text = styled.span`
  ${(props) => props.theme.Regular32A10};
  color: ${(props) => props.theme.grey50};
`;

export const BoldText = styled.b`
  ${(props) => props.theme.Bold32A10};
  color: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
`;
 