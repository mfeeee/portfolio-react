import React from 'react';

export function Projects({ theme }) {
    const [videoSrc, setVideoSrc] = useState(null);

    const openVideo = (src) => {
        setVideoSrc(src);
    };

    const closeVideo = () => {
        setVideoSrc(null);
    };

    return (
        <section id="projects">
            <p className="text_1_section">Navegue Pelos Meus</p>
            <h1 className="title">Projetos</h1>
            <div className="container_experience_details">
                <div className="container_about">
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bx-calculator' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">Calculadora</h2>
                        <p className="project-description">Aplicação simples para realizar operações matemáticas básicas com design responsivo.</p>

                        <div className="container_button">
                            <button className="project-button button" onclick={() => window.location.href = 'https://github.com/mfeeee/mf_calculadora'}>Github</button>
                            <button className="project-button button" onclick={() => window.location.href = 'https://mfeeee.github.io/mf_calculadora/'}>Live Demo</button>
                        </div>
                    </div>

                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bx-desktop' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">Blog Django</h2>
                        <p className="project-description">Blog desenvolvido com Python e Django, permitindo a criação, edição e visualização de postagens de maneira dinâmica.</p>
                        <div className="container_button">
                            <button className="project-button button" onclick={() => window.location.href = 'https://github.com/mfeeee/my_django_blog'}>Github</button>
                            <button className="project-button button" onclick={() => window.location.href = 'https://mfeeee.pythonanywhere.com'}>Live Demo</button>
                        </div>
                    </div>

                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bx-food-menu' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">Big Bite</h2>
                        <p className="project-description">Site de venda de hambúrgueres online, oferecendo uma experiência de compra simples e rápida.</p>
                        <div className="container_button">
                            <button className="project-button button" onclick={() => window.location.href = 'https://github.com/mfeeee/big_bite'}>Github</button>
                            <button className="project-button button" onclick={() => window.location.href = 'https://mfeeee.github.io/big_bite/'}>Live Demo</button>
                        </div>
                    </div>
                </div>
                <div className="container_about">
                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className='bx bxl-nodejs' id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">API Rest CRUD</h2>
                        <p className="project-description">API simples para gerenciar produtos, construída com Node.js e Express.</p>
                        <div className="container_button">
                            <button className="project-button button" onclick={() => window.location.href = 'https://github.com/mfeeee/api-produtos'}>Github</button>
                        </div>
                    </div>

                    <div className="container_details container_color">
                        <div className="container_articles">
                            <i className="bx bx-mobile-alt" id="dark-mode-icon-no-hover"></i>
                        </div>
                        <h2 className="experience-subtitle project-title">PHP Quiz</h2>
                        <p className="project-description">Aplicativo de quiz sobre PHP construído com Flutter e Dart</p>
                        <div className="container_button">
                            <button className="project-button button" onclick={() => window.location.href = 'https://github.com/mfeeee/projeto_perguntas'}>Github</button>
                            <button className="project-button button" onClick={() => openVideo('assets/PHP_Quiz.mp4')}>Video Demo</button>
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
                <img src={theme === 'dark' ? './assets/dark/arrow.png' : './assets/light/arrow.png'} alt="Icone de Flecha" className="icon arrow" onClick={() => window.location.href = '#contact'} />
            </div>
        </section>
    );
}