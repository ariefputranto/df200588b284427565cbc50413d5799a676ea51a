import styled, { css } from "styled-components"

import Row from "./Row"

const Circle = styled(Row)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 4px;

  & p:first-child{
    margin-top: calc(50% - 18px);
  }

  ${props => props.flex && css`
    flex: 0 0 56px;
  `}

  ${props => props.active && css`
    background-color: #424749;
    color: white;
  `}

  ${props => props.light_grey && css`
    background-color: #e2e4e4;
  `}

  ${props => props.disabled && css`
    & p {
      color: #e2e4e4;
    }
  `}
`

export default Circle