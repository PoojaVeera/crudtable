import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
