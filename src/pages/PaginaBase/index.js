import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/FavoritosContext";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Outlet />
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}

export default PaginaBase;