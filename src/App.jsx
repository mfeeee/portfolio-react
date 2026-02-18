import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles.css';

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
			<About theme={theme} />
			<Experience theme={theme} />
			<Projects theme={theme} />
			<Contact theme={theme} />
			<Footer />
		</div>
	);
}

export default App;
