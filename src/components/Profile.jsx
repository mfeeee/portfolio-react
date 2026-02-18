import React from 'react';

export function Profile({ theme }) {
    const profileImg = theme === 'dark'
        ? './assets/dark/profile-pic.png'
        : './assets/profile-pic.png';

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const getIconSrc = (social) => {
        if (hoveredIcon === social) return `./assets/blue/${social}.png`;
        return theme === 'dark' ? `./assets/dark/${social}.png` : `./assets/light/${social}.png`;
    };

    return (
        <section id="profile">
            <div className="pic-container_section">
                <img src={profileImg} alt="Foto de Perfil Maria Fernanda" />
            </div>
            <div className="text_section">
                <p className="text_1_section">Olá, eu sou</p>
                <h1 className="title">Maria Fernanda</h1>
                <p className="text_2_section">Engenheira de Software</p>
                <div className="container_button">
                    <button className="button button-color1" onclick={() => window.open('https://mfeeee.github.io/resume/resume.pdf', '_blank')}>Download CV</button>
                    <button className="button button-color2" onclick={() => window.location.href = '#contact'}>Contato</button>
                </div>
                <div id="container_socials">
                    {['github', 'linkedin', 'instagram'].map((social) => (
                        <img
                            key={social}
                            src={getIconSrc(social)}
                            alt={`Meu Perfil ${social}`}
                            className="icon"
                            onMouseOver={() => setHoveredIcon(social)}
                            onMouseOut={() => setHoveredIcon(null)}
                            onClick={() => window.location.href = social === 'github' ? 'https://github.com/mfeeee' : social === 'linkedin' ? 'https://www.linkedin.com/in/mfernandacs' : 'https://www.instagram.com/mfernandarcs/'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}