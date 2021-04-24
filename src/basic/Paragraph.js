import styled, { css } from "styled-components"

const Paragraph = styled.p`
	margin: 0;
  font-size: 16px;

  ${props => props.mt && css`
    margin-top: ${props => props.mt};
  `}

  ${props => props.mx && css`
    margin-left: ${props => props.mx};
    margin-right: ${props => props.mx};
  `}

  ${props => props.font_size && css`
    font-size: ${props => props.font_size};
  `}

  ${props => props.align && css`
    text-align: ${props => props.align};
  `}

  ${props => props.bold && css`
    font-weight: bold;
  `}

  ${props => props.main_text && css`
    color: #424749;
  `}

  ${props => props.sub_text && css`
    color: #6e7679;
  `}

  ${props => props.elipsis && css`
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  `}
`

export default Paragraph