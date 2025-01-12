import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import NaoEncontrada from "pages/NaoEncontrada";
import Container from "components/Container";
import Spinner from "components/Spinner";

const Player = () => {

    const [video, setVideo] = useState();
    const [carregando, setCarregando] = useState(true);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/DanielSouza2005/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados);
            })
            .finally(() => setCarregando(false));
    }, [parametros.id]);

    if (carregando) {
        return (
            <Container>
                <Banner
                    imagem="player"
                />
                <Titulo>
                    <h1>Player</h1>
                </Titulo>
                <Spinner />
            </Container>
        );
    }

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
        </Container>
    );
};

export default Player;