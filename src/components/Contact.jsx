

import { useTranslation } from 'react-i18next';
import emailBlue from '../assets/blue/email.png';
import whatsappBlue from '../assets/blue/whatsapp.png';
import linkedinBlue from '../assets/blue/linkedin.png';
import arrowDark from '../assets/dark/arrow.png';
import arrowLight from '../assets/light/arrow.png';

export function Contact({ theme }) {
    const { t } = useTranslation();
    return (
    <section id="contact">
        <p className="text_1_section">{t('contact.subtitle')}</p>
        <h1 className="title">{t('contact.title')}</h1>
        <div className="container_contact">
            <div className="container_info">
                <div className="container_details_info">
                    <div className="contact_info">
                        <img src={emailBlue} alt="Icone Email" className="icon contact-icon "/>
                        <p><a href="mailto:mfernandarocosta@gmail.com" className="contact-link" id="email">{t('contact.email')}</a></p>
                    </div>
                    <div className="contact_info">
                        <img src={whatsappBlue} alt="Icone Whatsapp" className="icon contact-icon"/>
                        <p><a href="https://wa.link/ykcpo2" className="contact-link">{t('contact.whatsapp')}</a></p>
                    </div>
                    <div className="contact_info">
                        <img src={linkedinBlue} alt="Icone Linkedin" className="icon contact-icon no-theme-switch"/>
                        <p><a href="https://www.linkedin.com/in/mfernandacs" className="contact-link">{t('contact.linkedin')}</a></p>
                    </div>
                </div>
            </div>
            <div>
                <img src={theme === 'dark' ? arrowDark : arrowLight} alt="Icone de Flecha" className="icon arrow" onClick={() => window.location.href = '#desktop-nav'} />
            </div>
        </div>
    </section>            
    );
}