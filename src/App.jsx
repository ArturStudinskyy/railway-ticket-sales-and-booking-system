import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:trainId" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
