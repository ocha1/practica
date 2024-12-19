import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CartContent";
import DataProvider from "./componets/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./componets/Landing/Landing";
import Details from "./componets/Details/Details";

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<CartContent />} />
      <Route path='/Landing' element={<Landing />} />
      <Route path='/Details' element={<Details />} />
    </Routes>
    </BrowserRouter>
    </DataProvider>
  )
}

export default App;
