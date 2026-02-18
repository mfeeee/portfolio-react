
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
                    <li><a href="#about">{t('nav.about')}</a></li>
                    <li><a href="#experience">{t('nav.experience')}</a></li>
                    <li><a href="#projects">{t('nav.projects')}</a></li>
                    <li><a href="#contact">{t('nav.contact')}</a></li>
                    <li>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <button onClick={() => changeLanguage('pt')}>PT</button>
                    </li>
                    <li>
                        <i
                            className={theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon'}
                            d="dark-mode-icon"
                            onClick={toggleTheme}
                        ></i>
                    </li>
                </ul>
            </div>
        </nav>
    );
}