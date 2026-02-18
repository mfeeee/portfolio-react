import { useTranslation } from 'react-i18next';

export function Navbar({ theme, toggleTheme }) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <nav id="desktop-nav">
            <div className="logo">Maria Fernanda</div>
            <div>
                <ul className="links_nav">
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <button onClick={() => changeLanguage('pt')}>PT</button>
                    </li>
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