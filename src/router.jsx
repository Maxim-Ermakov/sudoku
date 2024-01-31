import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Won from "./components/Won";
import Lose from "./components/Lose";
import GameHOC from "./containers/GameHOC";

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/game" element={<GameHOC />} />
            <Route path="/lose" element={<Lose />} />
            <Route path="/won" element={<Won />} />

        </Routes>
    )
}

export default BaseRouter