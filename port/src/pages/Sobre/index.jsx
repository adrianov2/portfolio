
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css'; 

function Sobre() {
    return (
        <>
            <Header />
            <section className="index-section">
                <div className="index-content">
                    <h1>Bem-vindo ao Meu Portfólio</h1>
                    <p>
                        Olá! Meu nome é Adriano Vagner, e sou um desenvolvedor apaixonado por criar soluções incríveis para problemas complexos. Neste portfólio, você encontrará uma coleção dos meus projetos mais recentes e informações sobre minhas habilidades e experiência.
                    </p>
                    <h2>Habilidades</h2>
                    <ul className="habilidades-list">
                        <li>Desenvolvimento Web</li>
                        <li>Frontend: HTML, CSS, JavaScript, React</li>
                        <li>Backend: Node.js, Express</li>
                        <li>Banco de Dados: MongoDB, MySQL</li>
                    </ul>
                    <h2>Experiência Profissional</h2>
                    <p>
                    Durante meus estudos, tenho trabalhado em diversos projetos interessantes, incluindo aplicações web e sistemas de informação. Estou sempre buscando oportunidades para aplicar meu conhecimento e contribuir para projetos inovadores.
                    </p>
                    <h2>Projetos</h2>
                    <p>
                        Ao longo da minha carreira, participei de diversos projetos emocionantes, desde pequenos sites até grandes aplicativos empresariais. Estou sempre em busca de desafios interessantes e oportunidades de aprendizado.
                    </p>
                    <div className="cta-container">
                        <button className="btn btn-primary">Veja Meus Projetos</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Sobre
