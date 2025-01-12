import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import Container from "components/Container";
import { useFavoritoContext } from "contexts/FavoritosContext";

const Favoritos = () => {

    const { favoritos } = useFavoritoContext();

    return (
        <Container>
            <Banner
                imagem="favoritos"
            />

            <Titulo>
                <h1>Meus Favoritos </h1>
            </Titulo>

            <section className={styles.container}>
                {
                    favoritos.length > 0 ?
                        favoritos.map((fav) => {
                            return <Card
                                {...fav}
                                key={fav.id}
                            />
                        })
                        :
                        <section>
                            <Titulo>
                                <h1>Não há favoritos cadastrados :( </h1>
                            </Titulo>
                        </section>
                }
            </section>
        </Container>
    );
};

export default Favoritos;