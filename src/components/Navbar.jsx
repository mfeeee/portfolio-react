
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function Navbar({ theme, toggleTheme }) {
    const { t, i18n } = useTranslation();
    const [hoveredLang, setHoveredLang] = useState(false);

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLanguage);
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
                        <i
                            className={`bx ${theme === 'dark' ? 'bx-sun nav-icon-dark' : 'bx-moon nav-icon-light'} nav-icon`}
                            id="dark-mode-icon"
                            onClick={toggleTheme}
                        ></i>
                    </li>
                    <li>
                        <i
                            className={`bx bx-world nav-icon ${theme === 'dark' ? 'nav-icon-dark' : 'nav-icon-light'}${hoveredLang ? ' nav-icon-hover' : ''}`}
                            id="language-toggle-icon"
                            onClick={toggleLanguage}
                            onMouseEnter={() => setHoveredLang(true)}
                            onMouseLeave={() => setHoveredLang(false)}
                        ></i>
                        <span
                            className={`nav-lang ${theme === 'dark' ? 'nav-icon-dark' : 'nav-icon-light'}${hoveredLang ? ' nav-icon-hover' : ''}`}
                            id="language-toggle-text"
                            style={{ marginLeft: '5px', fontWeight: '600', cursor: 'pointer' }}
                            onClick={toggleLanguage}
                            onMouseEnter={() => setHoveredLang(true)}
                            onMouseLeave={() => setHoveredLang(false)}
                        >
                            {i18n.language.toUpperCase()}
                        </span>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}