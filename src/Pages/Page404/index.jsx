import Footer from '../../Components/Footer'
import styles from './Page404.module.css'

function Page404() {
    return (
        <>
            
                <h2 className={styles.titulo2}>Ta fazendo algum trem errado ai!!</h2>
                <div className={styles.textos}>
                    <span className={styles.texto_grande}>404</span> <br />
                    <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
                </div>
           
        </>
    )
}

export default Page404
