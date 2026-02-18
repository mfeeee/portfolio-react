import { useTranslation } from 'react-i18next';

export function About({ theme }) {
    const { t } = useTranslation();
    return (
        <section id="about">
            <p className="text_1_section">{t('about.subtitle')}</p>
            <h1 className="title">{t('about.title')}</h1>
            <div className="section-container">
                <div className="pic-container_section">
                    <img src="./assets/maratona2025.png" alt="Foto de Desenvolvedora" className="about_pic" />
                </div>
                <div className="container_about_details">
                    <div className="container_about">
                        <div className="container_details">
                            <img src="assets/blue/briefcase.png" alt="Icone Qualificacao" className="icon" />
                            <h3>{t('about.experience_card')}</h3>
                            <p>{t('about.experience_1')}</p>
                            <br />
                            <p>{t('about.experience_2')}</p>
                        </div>
                        <div className="container_details">
                            <img src="./assets/blue/education.png" alt="Icone Qualificacao" className="icon" />
                            <h3>{t('about.studies_card')}</h3>
                            <p>{t('about.studies_1')}</p>
                            <br />
                            <p>{t('about.studies_2')}</p>
                        </div>
                        <div className="container_details">
                            <img src="./assets/blue/experience.png" alt="Icone Conquista" className="icon" />
                            <h3>{t('about.achievements_card')}</h3>
                            <p>{t('about.achievement_1')}</p>
                        </div>
                    </div>
                    <div className="container_text">
                        <p>{t('about.description')}</p>
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src={theme === 'dark' ? './assets/dark/arrow.png' : './assets/light/arrow.png'} alt="Icone de Flecha" className="icon arrow" onClick={() => window.location.href='#experience'}
                />
            </div>
        </section>
    );
}