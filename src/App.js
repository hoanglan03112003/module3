/* The following line can be included in a src/App.scss */
import "bootstrap/dist/css/bootstrap.css";
import CarList from "./Components/CarList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarAdd from "./Components/CarAdd";
import CarUpdate from "./Components/CarUpdate";
import CarDetail from "./Components/CarDetail";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/Products/CarAdd" element={<CarAdd />} />
          <Route path="/Products/Edit/:id" element={<CarUpdate />} />
          <Route path="/Products/Delete/:id" element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
