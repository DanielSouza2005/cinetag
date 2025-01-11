import styles from "./Card.module.css";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Card = ({ id, titulo, capa }) => {

    const iconProps = {
        alt: "Favoritar Filme",
        size: 25,
        className: styles.favoritar
    };

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

            <MdFavoriteBorder 
                {...iconProps} 
            />
        </div>
    );
};

export default Card;