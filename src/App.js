
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Delevery from "./Pages/Delevery/Develery";
import Finish from "./Pages/Finish/Finish";
import Payment from "./Pages/Payment/Payment";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Delevery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
