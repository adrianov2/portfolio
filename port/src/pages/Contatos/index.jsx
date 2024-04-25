
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Contatos.css'; 

function Contatos() {
    return (
        <>
            <Header />
            <section className="contatos-section">
                <div className="contatos-content">
                    <h1>Contatos</h1>
                    <div className="contatos-list">
                        <div className="contato-item">
                            <h2>Email</h2>
                            <p>adrianovibepe@gmaail.com</p>
                        </div>
                        <div className="contato-item">
                            <h2>Telefone</h2>
                            <p>(82) 98223-2457</p>
                        </div>
                        <div className="contato-item">
                            <h2>Endereço</h2>
                            <p>Rua Exemplo, 1234</p>
                            <p>Cidade, Estado</p>
                            <p>CEP: 12345-678</p>
                        </div>
                    </div>
                    <div className="redes-sociais">
                        <h2>Redes Sociais</h2>
                        <ul className="social-links">
                            <li><a href="https://www.facebook.com/seu-usuario" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contatos
