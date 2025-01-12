import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Player from "pages/Player";

import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/FavoritosContext";
import NaoEncontrada from "pages/NaoEncontrada";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />

            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                    <Route path="/player/:id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Routes>
            </FavoritosProvider>

            <Rodape />
        </BrowserRouter>
    );
};

export default AppRoutes;