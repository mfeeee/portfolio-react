import React from "react";

export function Navbar({ theme, toggleTheme }) {
    return (
        <nav id="desktop-nav">
        <div class="logo">Maria Fernanda</div>
        <div>
            <ul class="links_nav">
                <li><a href="#about">Sobre Mim</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
                <li>
                    <i
                    className={theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon'}
                    d="dark-mode-icon" 
                    onclick={toggleTheme}
                    ></i>
                </li>
            </ul>
        </div>
        </nav>
    );
}