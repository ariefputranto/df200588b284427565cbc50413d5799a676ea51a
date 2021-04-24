import styled, { css } from "styled-components"

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  ${props => props.mt && css`
    margin-top: ${props => props.mt};
  `}

  ${props => props.ml && css`
    margin-left: ${props => props.ml};
  `}

  ${props => props.overflow && css`
    overflow: ${props => props.overflow};
  `}

  ${props => props.overflow_scroll && css`
    overflow: scroll;
  `}

  ${props => props.flex && css`
    flex: 1;
  `}

  ${props => props.flex_grow && css`
    flex-grow: ${props => props.flex_grow};
  `}

  ${props => props.vertical && css`
    flex-direction: column;
  `}

  ${props => props.align_center && css`
    align-items: center;
  `}

  ${props => props.space_between && css`
    justify-content: space-between;
  `}
`

export default Row
