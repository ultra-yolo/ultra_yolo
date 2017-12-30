import styled, { css } from "styled-components";

/* prettier-ignore */
export const A = styled.a`
  margin-left: ${props => props.footer && '1vw'};
`;

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `}
  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `}

  background-color: ${props => props.header && '#FDFDFF'};
  padding-left: ${props => props.header && '12px'};
  padding-top: ${props => props.header && '5px'};
  padding-bottom: ${props => props.header && '15px'};
  height: ${props => props.header && '5vh'};
`;

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
`;

export const Flex = styled(Div)`
  display: flex;
  ${({ column }) => column && css`
    flex-direction: column;
  `}
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  ${({ align }) => align && css`
    align-items: ${align};
  `}
`;