
import { useTranslation } from 'react-i18next';

export function Experience({ theme }) {
    const { t } = useTranslation();
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
                                <img src="./assets/blue/c.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.c')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/cpp.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.cpp')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/php.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.php')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/python.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.python')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/sql.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.sql')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/typescript.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.typescript')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/javascript.png" alt="Icone Experiencia" className="icon" id="javascript" />
                                <div>
                                    <h3>{t('experience.javascript')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/dart.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.dart')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/java.png" alt="Icone Experiencia" className="icon" />
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
                                <img src="./assets/blue/laravel.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.laravel')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/django.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.django')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/express.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.express')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/nodejs.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.nodejs')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/deno.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.deno')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/flutter.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.flutter')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="container_details">
                        <h2 className="experience-subtitle">Frontend</h2>
                        {/* FRONTEND */}
                        <div className="container_articles">
                            <article>
                                <img src="./assets/blue/html.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.html')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/css.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.css')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/bootstrap.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.bootstrap')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/tailwind.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.tailwind')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/figma.png" alt="Icone Experiencia" className="icon" />
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
                                <img src="./assets/blue/postman.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.postman')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/git.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.git')}</h3>
                                    <p>{t('experience.level_inter')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/mongodb.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.mongodb')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/docker.png" alt="Icone Experiencia" className="icon" />
                                <div>
                                    <h3>{t('experience.docker')}</h3>
                                    <p>{t('experience.level_basic')}</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/blue/kubernetes.png" alt="Icone Experiencia" className="icon" />
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
                <img src={theme === 'dark' ? './assets/dark/arrow.png' : './assets/light/arrow.png'} alt="Icone de Flecha" className="icon arrow" onClick={() => window.location.href='#projects'}/>
            </div>
        </section>
    );
}