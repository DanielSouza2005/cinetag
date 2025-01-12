import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "contexts/FavoritosContext";

const Favoritos = () => {

    const { favoritos } = useFavoritoContext();

    return (
        <>
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
        </>
    );
};

export default Favoritos;