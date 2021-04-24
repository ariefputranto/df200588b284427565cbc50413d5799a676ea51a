import styled, { css } from "styled-components"

const Modal = styled.div`
  position: fixed;
  z-index: 1050;
  top: 18%;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export default Modal
