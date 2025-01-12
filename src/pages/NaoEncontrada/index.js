import Titulo from "components/Titulo";
import styles from "./NaoEncontrada.module.css";

const NaoEncontrada = () => {
    return (
        <>
            <section className={styles.NaoEncontradacontainer}>
                <div>
                    <Titulo>
                        <h2>Ops!</h2>
                    </Titulo>
                    <p>O conteúdo que você procura não foi encontrado :(</p>
                </div>
            </section>
        </>
    );
}

export default NaoEncontrada;