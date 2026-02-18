
import { useTranslation } from 'react-i18next';
import maratonaImg from '../assets/maratona2025.png';
import briefcaseBlue from '../assets/blue/briefcase.png';
import educationBlue from '../assets/blue/education.png';
import experienceBlue from '../assets/blue/experience.png';
import arrowDark from '../assets/dark/arrow.png';
import arrowLight from '../assets/light/arrow.png';

export function About({ theme }) {
    const { t } = useTranslation();
    return (
        <section id="about">
            <p className="text_1_section">{t('about.subtitle')}</p>
            <h1 className="title">{t('about.title')}</h1>
            <div className="section-container">
                <div className="pic-container_section">
                    <img src={maratonaImg} alt="Foto de Desenvolvedora" className="about_pic" />
                </div>
                <div className="container_about_details">
                    <div className="container_about">
                        <div className="container_details">
                            <img src={briefcaseBlue} alt="Icone Qualificacao" className="icon" />
                            <h3>{t('about.experience_card')}</h3>
                            <p>{t('about.experience_1')}</p>
                            <br />
                        </div>
                        <div className="container_details">
                            <img src={educationBlue} alt="Icone Qualificacao" className="icon" />
                            <h3>{t('about.studies_card')}</h3>
                            <p>{t('about.studies_1')}</p>
                            <br />
                        </div>
                        <div className="container_details">
                            <img src={experienceBlue} alt="Icone Conquista" className="icon" />
                            <h3>{t('about.achievements_card')}</h3>
                            <p>{t('about.achievement_1')}</p>
                        </div>
                    </div>
                    <div className="container_text">
                        <p className='text-justified'>{t('about.description')}</p>
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src={theme === 'dark' ? arrowDark : arrowLight} alt="Icone de Flecha" className="icon arrow" onClick={() => window.location.href='#experience'}
                />
            </div>
        </section>
    );
}