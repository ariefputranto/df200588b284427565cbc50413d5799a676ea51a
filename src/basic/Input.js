import styled, { css } from "styled-components"

import LocationIcon from "../images/marker_red.svg"

const Input = styled.input`
  border: 2px solid #e2e4e4;
  padding: 16px 24px;
  font-size: 20px;

  ${props => props.mt && css`
    margin-top: ${props => props.mt};
  `}

  ${props => props.location && css`
    padding-left: 68px;
    background-image: url(${ LocationIcon });
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 16px;
    background-size: 36px;
    border-radius: 8px;
  `}
`

export default Input
