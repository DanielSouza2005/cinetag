import styles from "./Card.module.css";

import { useFavoritoContext } from "contexts/FavoritosContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Card = ({ id, titulo, capa }) => {

    const { addFavorito, verificaFavoritoExiste } = useFavoritoContext();

    const clickIcone = () => {
        addFavorito({
            id,
            titulo,
            capa
        });
    };

    const iconProps = {
        alt: "Favoritar Filme",
        size: 25,
        className: styles.favoritar,
        onClick: clickIcone
    };

    const FavoritoExiste = verificaFavoritoExiste({ id });

    return (
        <div
            className={styles.container}
            key={id}
        >
            <img
                src={capa}
                alt={titulo}
                className={styles.capa}
            />

            <h2>{titulo}</h2>

            {
                FavoritoExiste ?
                    <MdFavorite
                        {...iconProps}
                    />
                    :
                    <MdFavoriteBorder
                        {...iconProps}
                    />
            }

        </div>
    );
};

export default Card;