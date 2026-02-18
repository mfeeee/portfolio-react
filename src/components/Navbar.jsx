
import { useTranslation } from 'react-i18next';

export function Navbar({ theme, toggleTheme }) {
    const { t, i18n } = useTranslation();

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
                            className='bx bx-world'
                            id="language-toggle-icon"
                            onClick={toggleLanguage}
                            style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                        ></i>
                        <span style={{ marginLeft: '5px', fontWeight: '600', cursor: 'pointer' }} onClick={toggleLanguage}>
                            {i18n.language.toUpperCase()}
                        </span>
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