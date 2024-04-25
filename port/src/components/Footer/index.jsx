import styles from './Footer.module.css'; 

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copy}>
                    &copy; 2024 Seu Nome. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
