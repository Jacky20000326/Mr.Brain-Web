import react from "react";
import styled from "styled-components";

const Nav = () => {
	return (
		<NavStyled>
			<Logo>
				<img src="./src/assets/logo.png" alt="" />
			</Logo>
			<GetApp>Get App</GetApp>
			<HamburgerBtn>
				<img src="./src/assets/codicon_list-selection.png" alt="" />
			</HamburgerBtn>
		</NavStyled>
	);
};

const NavStyled = styled.div`
	width: 100vw;
	height: 20vh;
	background-color: ${({ theme }) => theme.color.Header};
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Logo = styled.div`
	width: 73px;
	height: 59px;
`;
const GetApp = styled.button`
	width: 30%;
	max-width: 200px;
	height: 30%;

	background-color: ${({ theme }) => theme.color.Header};
	border: 2px solid #fff;
	font-weight: 700;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	display: flex;
	color: #fff;
	margin-left: 15%;
	margin-right: 5%;
`;
const HamburgerBtn = styled.div`
	width: 38px;
	height: 38px;
`;
export default Nav;
