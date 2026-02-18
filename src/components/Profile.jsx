import React from 'react';

export function Profile({ theme }) {
  const profileImg = theme === 'dark' 
    ? './assets/dark/profile-pic.png' 
    : './assets/profile-pic.png';

    return (
        <section id="profile">
            <div class="pic-container_section">
                <img src={profileImg} alt="Foto de Perfil Maria Fernanda"/>
            </div>
            <div class="text_section">
                <p class="text_1_section">Olá, eu sou</p>
                <h1 class="title">Maria Fernanda</h1>
                <p class="text_2_section">Engenheira de Software</p>
                <div class="container_button">
                    <button class="button button-color1" onclick={() => window.open('https://mfeeee.github.io/resume/resume.pdf', '_blank')}>Download CV</button>                
                    <button class="button button-color2" onclick={() => window.location.href='#contact'}>Contato</button>
                </div>
                <div id="container_socials">
                    <img src="./assets/github.png" alt="Meu Perfil GitHub" class="icon" onclick={() => window.location.href='https://github.com/mfeeee'}/>
                    {/* <img src="./assets/instagram.png" alt="Meu Perfil Instagram" class="icon" onclick={() => window.location.href='https://www.instagram.com/mfernandarcs/'}/> */}
                    <img src="./assets/linkedin.png" alt="Meu Perfil LinkedIn" class="icon" onclick={() => window.location.href='https://www.linkedin.com/in/mfernandacs'}/>
                </div>
            </div>
        </section>
    );
}