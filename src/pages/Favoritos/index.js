import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "contexts/FavoritosContext";
import Container from "components/Container";

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
                    favoritos.map((fav) => {
                        return <Card
                                    {...fav}
                                    key={fav.id}
                                />
                    })
                }
            </section>
        </Container>
    );
};

export default Favoritos;