import React from 'react';

export function About({ theme }) {
    return (
        <section id="about">
            <p class="text_1_section">Conheça Mais</p>
            <h1 class="title">Sobre Mim</h1>
            <div class="section-container">
                <div class="pic-container_section">
                    <img src="./assets/maratona2025.png" alt="Foto de Desenvolvedora" class="about_pic" />
                </div>
                <div class="container_about_details">
                    <div class="container_about">
                        <div class="container_details">
                            <img src="assets/blue/briefcase.png" alt="Icone Qualificacao" class="icon" />
                            <h3>Experiência Profissional</h3>
                            <p>AldeiaWeb - Estagiária FullStack (08/2025 - Atual)</p>
                            <br />
                            <p>RGM Tecnologias - Estagiária de desenvolvimento (01/2025 - 08/2025)</p>
                        </div>
                        <div class="container_details">
                            <img src="./assets/blue/education.png" alt="Icone Qualificacao" class="icon" />
                            <h3>Estudos</h3>
                            <p>Análise e Desenvolvimento de Sistemas - Instituto Federal do Piauí (IFPI)</p>
                            <br />
                            <p>Desenvolvedor Fullstack - Programe.IO</p>
                        </div>
                        <div class="container_details">
                            <img src="./assets/blue/experience.png" alt="Icone Conquista" class="icon" />
                            <h3>Conquistas</h3>
                            <p>Menção Honrosa na Final Brasileira da Maratona SBC de Programação (2025)</p>
                        </div>
                    </div>
                    <div class="container_text">
                        <p>
                            Sou Maria Fernanda, estudante de Análise e Desenvolvimento de Sistemas no IFPI e apaixonada por tecnologia e arte. Tenho experiência em algoritmos, estruturas de dados 
                            e raciocínio lógico, comprovada pela classificação para a Final Nacional da Maratona SBC de Programação (2025) e atuação como bolsista de pesquisa científica (PIBIC/CNPq) 
                            em sistemas de coleta de dados arqueológicos. Atualmente, sou estagiária fullstack trabalhando com o framework Laravel na AldeiaWeb, onde aplico meus conhecimentos em projetos 
                            reais. Também expando minhas habilidades em Tailwind, Java e soft skills pelo Programe.IO. Minha paixão por música clássica e piano inspira disciplina, atenção aos detalhes e 
                            criatividade, qualidades que levo para o desenvolvimento de soluções inovadoras e eficientes.
                        </p>
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