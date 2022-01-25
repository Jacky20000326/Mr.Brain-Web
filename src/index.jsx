import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyled } from "./components/styled/GlobalStyled";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyled />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
