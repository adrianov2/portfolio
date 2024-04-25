
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                    <p>
                        Bem-vindo ao meu portfólio! Aqui você encontra projetos incríveis desenvolvidos por mim.
                        <br />
                        <span>Adriano Vagner</span> <br />
                        Desenvolvedor Front End
                    </p>
                    <Link to="/Sobre" className='btn btn-red'>
                        Saiba mais Sobre Min
                    </Link>
                </div>
                <figure>
                    <img src="./f1.svg" alt="Imagem de Home" />
                </figure>
            </section>
            <Footer />
        </>
    );
}

export default Home;
