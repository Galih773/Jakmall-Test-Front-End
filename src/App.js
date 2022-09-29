
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Delevery from "./Pages/Delevery";
import Finish from "./Pages/Finish";
import Payment from "./Pages/Payment";


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
