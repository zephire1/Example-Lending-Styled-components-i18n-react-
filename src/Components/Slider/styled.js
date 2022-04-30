import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 9.1rem;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

export const InfoBlock = styled.div`
  margin-top: 5rem;
`;

export const Item = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  &.show {
    animation: show 1s;
    display: block;
  }
  &.hide {
    animation: hide 1s;
    display: none;
  }

  @keyframes hide {
    to {opacity: 0;}
    from {opacity: 1;}
  }
  @keyframes show {
    to {opacity: 1;}
    from {opacity: 0;}
  }
`;

export const Type = styled.h2`

  ${(props) => props.theme.Regular30A3};
  color: ${(props) => props.theme.grey};
  margin-bottom: -1.5rem;

`;

export const Name = styled.h1`

  ${(props) => props.theme.Bold60A3};
  color: ${(props) => props.theme.theme === 'dark' ? props.theme.white : props.theme.dark};

`;

export const SubName = styled.h3`

  ${(props) => props.theme.Medium24A1};
  color: ${(props) => props.theme.theme === 'dark' ? props.theme.white : props.theme.dark};
  margin: 3rem 0;

`;

export const Text = styled.p`

  ${(props) => props.theme.Regular16A5};
  color: ${(props) => props.theme.theme === 'dark' ? props.theme.white : props.theme.dark};
  white-space: break-spaces;

`;

export const Spacer = styled.div`
  margin-top: 2rem;
`;

export const Preview = styled.img`
  position: absolute;
  top: 33%;
  right: 33.8rem;
  transform: translateY(-50%);
  width: 60rem;
  animation: fly 2s cubic-bezier(0.47, 0, 0.75, 0.72) infinite;

  @keyframes fly {
    0% {margin-top: .2rem; }
    50% {margin-top: 1.1rem; margin-right: .1rem;}
    100% {margin-top: .2rem;}
  }
`;

export const SliderZone = styled.div`
  pointer-events: none;
`;