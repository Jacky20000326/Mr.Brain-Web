import { colours } from "nodemon/lib/config/defaults";
import react from "react";
import styled from "styled-components";

const Container = () => {
	return (
		<ContainerStyled>
			<Title>
				簡潔的美式插圖
				<ContainerImg>
					<img src="./src/assets/ContainerImg.png" alt="" />
				</ContainerImg>
			</Title>
		</ContainerStyled>
	);
};
const ContainerStyled = styled.div`
	padding: 41px 0px 0px 0px;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.color.Body};
`;
const Title = styled.div`
	font-size: 40px;
	text-shadow: 2px 4px 8px #b6724b;
	color: #ffffff;
	font-weight: bold;
	font-style: normal;
`;
const ContainerImg = styled.div`
	width: 310px;
	height: 253px;
	margin-top: 47px;
`;

export default Container;
