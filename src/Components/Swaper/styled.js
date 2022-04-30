import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 5rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

`;

export const PageText = styled.span`

  ${(props) => props.theme.Bold250};
  color: ${(props) => props.theme.theme === 'dark' ? props.theme.lightDark : props.theme.darkGrey};
  position: fixed;
  top: 50%;
  right: -4rem;
  transform: translateY(-50%);
  z-index: -1;
  user-select: none;
  
`;

export const SwapButton = styled.button`

  &:nth-child(1) {
    margin-top: 13.1rem;
  }
  &:nth-last-child(1) {
    margin-bottom: 15rem;
  }
  &.rotate {
    transform: rotate(180deg);
  }

  svg {
    path {
      stroke: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
    }
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

`;