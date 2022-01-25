import react from "react";
import styled from "styled-components";
import Nav from "./components/Nav.jsx";
import Outline from "./components/Outline.jsx";
import Container from "./components/Container.jsx";
import { ThemeProvider } from "styled-components";
const App = () => {
	const themeStyle = {
		color: {
			Header: "#D8B4A0",
			Body: "#FFF3EC",
		},
		desktop: "1512px",
	};
	return (
		<>
			<ThemeProvider theme={themeStyle}>
				<Nav></Nav>
				<Outline></Outline>
				<Container></Container>
			</ThemeProvider>
		</>
	);
};

export default App;
