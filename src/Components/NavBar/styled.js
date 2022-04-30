import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  ${(props) => props.theme.Regular18};
  gap: 5rem;
  cursor: pointer;
  color: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
`;

export const Item = styled.li`
  &.active {
    ${(props) => props.theme.Semibold18};

    position: relative;
    &:after {
      position: absolute;
      bottom: -1.1rem;
      left: -1rem;
      width: calc(100% + 2rem);
      height: .3rem;
      border-radius: .3rem;
      background-color: ${(props) => props.theme.theme === 'light' ? props.theme.dark : props.theme.white};
      content: '';
    }
  }
`;