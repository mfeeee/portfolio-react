import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Profile({ theme }) {
    const { t } = useTranslation();
    const profileImg = theme === 'dark'
        ? './assets/dark/profile-pic.png'
        : './assets/profile-pic.png';

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const getIconSrc = (social) => {
        if (hoveredIcon === social) return `./assets/blue/${social}.png`;
        return theme === 'dark' ? `./assets/dark/${social}.png` : `./assets/light/${social}.png`;
    };

    const socialLinks = {
        github: 'https://github.com/mfeeee',
        linkedin: 'https://www.linkedin.com/in/mfernandacs',
        instagram: 'https://www.instagram.com/mfernandarcs/'
    };

    return (
        <section id="profile">
            <div className="pic-container_section">
                <img src={profileImg} alt={t('profile.name')} />
            </div>
            <div className="text_section">
                <p className="text_1_section">{t('profile.hello')}</p>
                <h1 className="title">{t('profile.name')}</h1>
                <p className="text_2_section">{t('profile.role')}</p>
                <div className="container_button">
                    <button className="button button-color1" onClick={() => window.open('https://mfeeee.github.io/resume/resume.pdf', '_blank')}>{t('profile.cv_button')}</button>
                    <button className="button button-color2" onClick={() => window.location.href = '#contact'}>{t('profile.contact_button')}</button>
                </div>
                <div id="container_socials">
                    {['github', 'linkedin', 'instagram'].map((social) => (
                        <img
                            key={social}
                            src={getIconSrc(social)}
                            alt={t(`profile.${social}`)}
                            className="icon"
                            onMouseOver={() => setHoveredIcon(social)}
                            onMouseOut={() => setHoveredIcon(null)}
                            onClick={() => window.location.href = socialLinks[social]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}