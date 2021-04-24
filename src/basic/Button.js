import styled, { css } from "styled-components"

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 0;
  background: white;
  color: #6e7679;
  border: 2px solid black;
  font-size: 16px;
  text-align: center;
  border: 2px solid #f1f1f2;

  ${props => props.default_reversed && css`
    background: #424749;
    color: white;
  `}

  ${props => props.add_cart && css`
    background: #f9423a;
    color: white;
  `}

  ${props => props.full && css`
    flex: 1;
  `}

  ${props => props.rounded && css`
    border-radius: 8px;
  `}

  ${props => props.type && props.type === "lunch" && css`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  `}

  ${props => props.type && props.type === "dinner" && css`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}

  ${props => props.centered_content && css`
    display: flex;
    align-items: center;
  `}
`

export default Button
