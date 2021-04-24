import styled, { css } from "styled-components"

const Sticky = styled.div`
	position: fixed;
	background: #ffffff;
	z-index: 1049;

  ${props => props.padding && css`
    padding: ${props => props.padding};
  `}

  ${props => props.transparent && css`
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  `}

  ${props => props.static_transparent && css`
		background: rgba(0, 0, 0, 0.3);
  `}

  ${props => props.bottom && css`
	  bottom: 0;
	  left: 0;
	  right: 0;
  `}

  ${props => props.top && css`
	  top: 0;
	  left: 0;
	  right: 0;
  `}

  ${props => props.full && css`
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
  `}
`

export default Sticky


