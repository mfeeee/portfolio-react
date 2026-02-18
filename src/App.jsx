import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Profile } from './components/Profile';
// import './styles.css';

function App() {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark-mode");
		} else {
			document.documentElement.classList.remove("dark-mode");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div className="App">
			<Navbar theme={theme} toggleTheme={toggleTheme} />
			<Profile theme={theme} />
		</div>
	);
}

export default App;
