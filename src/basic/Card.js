import styled from "styled-components"

const Card = styled.div`
	width: calc(100% - 48px);
	margin-bottom: 16px;
	padding: 16px;
	border-radius: 16px;
	-webkit-box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1); 
	box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);

	& .full-img {
		margin: -16px;
		margin-bottom: 16px;
		width: calc(100% + 32px);
		height: auto;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
	}
`

export default Card


