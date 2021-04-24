import styled, { css } from "styled-components"

const Image = styled.img`
  height: 24px;
  margin-right: ${props => props.mr};
  color: ${props => props.color};

  ${props => props.big && css`
    height: 48px;
  `}

  ${props => props.medium && css`
    height: 36px;
  `}

  ${props => props.ml && css`
    margin-left: ${props => props.ml};
  `}

  ${props => props.center && css`
    display: block;
    margin: auto;
  `}

`

export default Image
