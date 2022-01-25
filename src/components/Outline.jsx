import react from "react";
import styled from "styled-components";
const Outline = () => {
	return (
		<Title>
			<h1>Mr. Brain</h1>
			<h1>時間專注管理 App </h1>
			<Contents>
				<h3>一起杜絕線下干擾，</h3>
				<h3>進入適合專注的線上</h3>
				<h3>環境</h3>
			</Contents>
			<AppStore>
				<img src="./src/assets/Apple-Store.png" alt="" />
			</AppStore>
			<ArrowDown>
				<ArrowDownImg>
					<img src="./src/assets/Arrow-Down.png" alt="" />
				</ArrowDownImg>
			</ArrowDown>
		</Title>
	);
};
const Title = styled.div`
	background-color: ${({ theme }) => theme.color.Header};
	padding: 0px 5% 2% 5%;
`;
const Contents = styled.div`
	margin-top: 30px;
`;
const AppStore = styled.div`
	width: 138px;
	height: 45px;
	margin-top: 20px;
	margin-bottom: 50px;
`;
const ArrowDown = styled.div`
	width: 54px;
	height: 54px;
	border-radius: 50px;
	background: rgba(255, 255, 255, 0.57);
	opacity: 0.6;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin-left: 50%;
	transform: translateX(-50%);
	margin-bottom: 30px;
`;
const ArrowDownImg = styled.div`
	width: 24px;
	height: 24px;
`;

export default Outline;
