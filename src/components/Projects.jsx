
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import arrowDark from '../assets/dark/arrow.png';
import arrowLight from '../assets/light/arrow.png';
import arrowBLue from '../assets/blue/arrow.png';
import phpQuizVideo from '../assets/PHP_Quiz.mp4';

export function Projects({ theme }) {
    const { t } = useTranslation();
    const [videoSrc, setVideoSrc] = useState(null);

    const openVideo = (src) => {
        setVideoSrc(src);
    };

    const closeVideo = () => {
        setVideoSrc(null);
    };

        const [hoveredIcon, setHoveredIcon] = useState(null);
        
        const getArrowSrc = () => {
            if (hoveredIcon === 'arrow') {
                return arrowBLue;
            }
            return theme === 'dark' ? arrowDark : arrowLight;
        };

    return (
        <section id="projects">
            <p className="text_1_section">{t('projects.subtitle')}</p>
            <h1 className="title">{t('projects.title')}</h1>
            <div className="container_experience_details">
                <div className="container_about">
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bx-calculator' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">{t('projects.calculadora_title')}</h2>
                        <p className="project-description">{t('projects.calculadora_desc')}</p>
                        <div className="container_button">
                            <button className="project-button button" onClick={() => window.location.href = 'https://github.com/mfeeee/mf_calculadora'}>{t('projects.github')}</button>
                            <button className="project-button button" onClick={() => window.location.href = 'https://mfeeee.github.io/mf_calculadora/'}>{t('projects.livedemo')}</button>
                        </div>
                    </div>
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bx-desktop' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">{t('projects.blog_title')}</h2>
                        <p className="project-description">{t('projects.blog_desc')}</p>
                        <div className="container_button">
                            <button className="project-button button" onClick={() => window.location.href = 'https://github.com/mfeeee/my_django_blog'}>{t('projects.github')}</button>
                            <button className="project-button button" onClick={() => window.location.href = 'https://mfeeee.pythonanywhere.com'}>{t('projects.livedemo')}</button>
                        </div>
                    </div>
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bx-food-menu' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">{t('projects.bigbite_title')}</h2>
                        <p className="project-description">{t('projects.bigbite_desc')}</p>
                        <div className="container_button">
                            <button className="project-button button" onClick={() => window.location.href = 'https://github.com/mfeeee/big_bite'}>{t('projects.github')}</button>
                            <button className="project-button button" onClick={() => window.location.href = 'https://mfeeee.github.io/big_bite/'}>{t('projects.livedemo')}</button>
                        </div>
                    </div>
                </div>
                <div className="container_about">
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bxl-nodejs' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">{t('projects.api_title')}</h2>
                        <p className="project-description">{t('projects.api_desc')}</p>
                        <div className="container_button">
                            <button className="project-button button" onClick={() => window.location.href = 'https://github.com/mfeeee/api-produtos'}>{t('projects.github')}</button>
                        </div>
                    </div>
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className="bx bx-mobile-alt" id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">{t('projects.phpquiz_title')}</h2>
                        <p className="project-description">{t('projects.phpquiz_desc')}</p>
                        <div className="container_button">
                            <button className="project-button button" onClick={() => window.location.href = 'https://github.com/mfeeee/projeto_perguntas'}>{t('projects.github')}</button>
                            <button className="project-button button" onClick={() => openVideo(phpQuizVideo)}>{t('projects.videodemo')}</button>
                        </div>
                    </div>
                </div>
            </div>
            {videoSrc && (
                <div id="video-modal" style={{ display: 'flex' }} onClick={closeVideo}>
                    <div className="video-container" onClick={(e) => e.stopPropagation()}>
                        <video id="video-player" src={videoSrc} controls autoPlay></video>
                        <button id="close-modal" onClick={closeVideo}>x</button>
                    </div>
                </div>
            )}
            <div>
                <img src={getArrowSrc()} alt="Icone de Flecha" className="icon arrow" onMouseOver={() => setHoveredIcon('arrow')} onMouseOut={() => setHoveredIcon(null)}                    
                    onClick={() => window.location.href = '#contact'} 
                />
            </div>
        </section>
    );
}