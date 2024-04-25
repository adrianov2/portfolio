
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css'

function Projetos() {
    return (
        <>
            <Header />
            <section className="projetos-section">
                <div className="projetos-content">
                    <h1>Projetos</h1>
                    <div className="projeto">
                        <h2>Site de Noticias wordpress</h2>
                        <p>Desenvolvimento de um sistema de notícias utilizando WordPress e PHP, com foco na criação, publicação e gerenciamento de conteúdo de notícias de forma eficiente. O projeto inclui a configuração e personalização do WordPress para atender às necessidades específicas do cliente, desenvolvimento de funcionalidades personalizadas usando PHP, integração de plugins relevantes para otimizar o desempenho e a segurança do sistema, além de design responsivo para garantir uma experiência de usuário consistente em diferentes dispositivos.</p>
                        <a href="#">Ver Detalhes</a>
                    </div>
                    <div className="projeto">
                        <h2>Robo Iqotion</h2>
                        <p>Desenvolvimento de um robô automatizado para negociação na plataforma IQ Option, utilizando a linguagem de programação Python. O robô será capaz de executar operações de compra e venda de ativos financeiros de forma autônoma, com base em estratégias pré-definidas e indicadores de análise técnica. O projeto inclui a integração com a API oficial da IQ Option para acesso aos dados do mercado e execução de operações de negociação em tempo real. Além disso, o robô será configurado com recursos avançados de gerenciamento de risco e controle de posição, visando maximizar os lucros e minimizar as perdas durante as operações. O código fonte será desenvolvido de forma modular e bem documentada, permitindo fácil manutenção e personalização do robô conforme as necessidades do usuário.</p>
                        <a href="#">Ver Detalhes</a>
                    </div>
                    <div className="projeto">
                        <h2>Plataforma de Investimento</h2>
                        <p>Desenvolvimento de uma plataforma de investimento online, proporcionando aos usuários uma experiência completa para investir em diversos instrumentos financeiros, como ações, títulos, fundos, criptomoedas e outros ativos. A plataforma será construída utilizando tecnologias web modernas, como HTML, CSS, JavaScript e frameworks como React.js ou Angular.js para o frontend e Node.js ou Django para o backend. O sistema incluirá recursos avançados de análise de mercado, permitindo aos usuários acessar dados em tempo real, gráficos interativos, indicadores técnicos e ferramentas de pesquisa. Além disso, a plataforma oferecerá funcionalidades de negociação, permitindo que os usuários executem ordens de compra e venda diretamente na plataforma, com acesso a diversos tipos de ordens, como ordens de mercado, limite e stop.</p>
                        <a href="#">Ver Detalhes</a>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Projetos
