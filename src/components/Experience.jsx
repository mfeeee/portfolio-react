import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cIcon from '../assets/blue/c.png';
import cppIcon from '../assets/blue/cpp.png';
import phpIcon from '../assets/blue/php.png';
import pythonIcon from '../assets/blue/python.png';
import sqlIcon from '../assets/blue/sql.png';
import typescriptIcon from '../assets/blue/typescript.png';
import javascriptIcon from '../assets/blue/javascript.png';
import dartIcon from '../assets/blue/dart.png';
import javaIcon from '../assets/blue/java.png';
import laravelIcon from '../assets/blue/laravel.png';
import djangoIcon from '../assets/blue/django.png';
import expressIcon from '../assets/blue/express.png';
import nodejsIcon from '../assets/blue/nodejs.png';
import denoIcon from '../assets/blue/deno.png';
import flutterIcon from '../assets/blue/flutter.png';
import htmlIcon from '../assets/blue/html.png';
import cssIcon from '../assets/blue/css.png';
import bootstrapIcon from '../assets/blue/bootstrap.png';
import tailwindIcon from '../assets/blue/tailwind.png';
import figmaIcon from '../assets/blue/figma.png';
import postmanIcon from '../assets/blue/postman.png';
import gitIcon from '../assets/blue/git.png';
import mongodbIcon from '../assets/blue/mongodb.png';
import dockerIcon from '../assets/blue/docker.png';
import kubernetesIcon from '../assets/blue/kubernetes.png';
import arrowDark from '../assets/dark/arrow.png';
import arrowLight from '../assets/light/arrow.png';
import arrowBLue from '../assets/blue/arrow.png';

export function Experience({ theme }) {
    const { t } = useTranslation();
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const getArrowSrc = () => {
        if (hoveredIcon === 'arrow') {
            return arrowBLue;
        }
        return theme === 'dark' ? arrowDark : arrowLight;
    };

    return (
        <section id="experience">
            <p className="text_1_section">{t('experience.subtitle')}</p>
            <h1 className="title">{t('experience.title')}</h1>
            <div className="container_experience_details">
                <div className="container_about">
                    <div className="container_details">
                        <h2 className="experience-subtitle">{t('experience.backend')}</h2>
                        <div className="container_articles">
                            {/* BACKEND */}
                            <article>
                                <img src={cIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.c')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={cppIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.cpp')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={phpIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.php')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={pythonIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.python')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={sqlIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.sql')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={typescriptIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.typescript')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={javascriptIcon} alt="Icone Experiencia" className="icon" id="javascript" />
                                <div>
                                    <h3>{t('experience.javascript')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={dartIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.dart')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={javaIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.java')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="container_details">
                        <h2 className="experience-subtitle">{t('experience.frameworks')}</h2>
                        <div className="container_articles">
                            {/* FRAMEWORKS */}
                            <article>
                                <img src={laravelIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.laravel')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={djangoIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.django')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={expressIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.express')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={nodejsIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.nodejs')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={denoIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.deno')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={flutterIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.flutter')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='container_about'>
                    <div className="container_details">
                        <h2 className="experience-subtitle">Frontend</h2>
                        {/* FRONTEND */}
                        <div className="container_articles">
                            <article>
                                <img src={htmlIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.html')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={cssIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.css')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={bootstrapIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.bootstrap')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={tailwindIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.tailwind')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={figmaIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.figma')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="container_details">
                        <h2 className="experience-subtitle">{t('experience.devops')}</h2>
                        <div className="container_articles">
                            {/* DEVOPS */}
                            <article>
                                <img src={postmanIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.postman')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={gitIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.git')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={mongodbIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.mongodb')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={dockerIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.docker')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src={kubernetesIcon} alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.kubernetes')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={getArrowSrc()} alt="Icone de Flecha" className="icon arrow" onMouseOver={() => setHoveredIcon('arrow')} onMouseOut={() => setHoveredIcon(null)}
                    onClick={() => window.location.href = '#project'}
                />
            </div>
        </section>
    );
}