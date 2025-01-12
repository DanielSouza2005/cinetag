import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import videos from "json/db.json";

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import NaoEncontrada from "pages/NaoEncontrada";
import Container from "components/Container";

const Player = () => {

    const parametros = useParams();

    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    });

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <Container>
            <Banner
                imagem="player"
            />

            <Titulo>
                <h1>Player </h1>
            </Titulo>

            {
                video ?
                    <section>
                        <iframe                            
                            height="315"
                            src={video.link}
                            title={video.titulo}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </section>
                    :
                    ""
            }

        </Container>
    );
};

export default Player;