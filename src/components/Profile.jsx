
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile-pic.png';
import profilePicDark from '../assets/dark/profile-pic.png';
import githubBlue from '../assets/blue/github.png';
import githubDark from '../assets/dark/github.png';
import githubLight from '../assets/light/github.png';
import linkedinBlue from '../assets/blue/linkedin.png';
import linkedinDark from '../assets/dark/linkedin.png';
import linkedinLight from '../assets/light/linkedin.png';
import instagramBlue from '../assets/blue/instagram.png';
import instagramDark from '../assets/dark/instagram.png';
import instagramLight from '../assets/light/instagram.png';

export function Profile({ theme }) {
    const { t } = useTranslation();
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialLinks = {
        github: 'https://github.com/mfeeee',
        linkedin: 'https://www.linkedin.com/in/mfernandacs',
        instagram: 'https://www.instagram.com/mfernandarcs/'
    };

    const getProfileImg = () => (theme === 'dark' ? profilePicDark : profilePic);

    const getIconSrc = (social) => {
        if (hoveredIcon === social) {
            if (social === 'github') return githubBlue;
            if (social === 'linkedin') return linkedinBlue;
            if (social === 'instagram') return instagramBlue;
        }
        if (theme === 'dark') {
            if (social === 'github') return githubDark;
            if (social === 'linkedin') return linkedinDark;
            if (social === 'instagram') return instagramDark;
        } else {
            if (social === 'github') return githubLight;
            if (social === 'linkedin') return linkedinLight;
            if (social === 'instagram') return instagramLight;
        }
    };

    return (
        <section id="profile">
            <div className="pic-container_section">
                <img src={getProfileImg()} alt={t('profile.name')} />
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