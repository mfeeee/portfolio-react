import React from 'react';

export function Footer({ theme }) {
    return (
    <footer>
        <nav>
            <div className="nav-links_container">
                <ul className="links_nav">
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
        <p>Copyright &#169 2026 Maria Fernanda. Todos os Direitos Reservados.</p>
    </footer>
    );
}