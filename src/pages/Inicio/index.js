import { useEffect, useState } from "react";
import styles from "./Inicio.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import Container from "components/Container";
import Spinner from "components/Spinner";

const Inicio = () => {

    const [videos, setVideos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/DanielSouza2005/cinetag-api/videos")
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados);
            })
            .finally(() => setCarregando(false));
    }, []);

    if (carregando) {
        return (
            <Container>
                <Banner
                    imagem="home"
                />
                <Titulo>
                    <h1>Um lugar para guardar seus vídeos e filmes! </h1>
                </Titulo>
                <Spinner />
            </Container>
        );
    }

    return (
        <Container>
            <Banner
                imagem="home"
            />

            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes! </h1>
            </Titulo>

            <section className={styles.container}>
                {
                    videos.map((video) => {
                        return <Card
                            {...video}
                            key={video.id}
                        />
                    })
                }
            </section>
        </Container>
    );
};

export default Inicio;