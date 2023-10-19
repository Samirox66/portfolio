import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Packages } from "../pages/Packages";
import { Header } from "../widgets/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="packages" element={<Packages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
