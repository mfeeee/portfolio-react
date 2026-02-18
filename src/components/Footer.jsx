
import { useTranslation } from 'react-i18next';

export function Footer({ theme }) {
    const { t } = useTranslation();
    return (
    <footer>
        <nav>
            <div className="nav-links_container">
                <ul className="links_nav">
                    <li><a href="#about">{t('nav.about')}</a></li>
                    <li><a href="#experience">{t('nav.experience')}</a></li>
                    <li><a href="#projects">{t('nav.projects')}</a></li>
                    <li><a href="#contact">{t('nav.contact')}</a></li>
                </ul>
            </div>
        </nav>
        <p>{t('footer.copyright')}</p>
    </footer>
    );
}