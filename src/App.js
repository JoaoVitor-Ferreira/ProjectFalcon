import Header from './Pages/Header.jsx';
import Home from './Pages/Home.jsx';
import Loja from './Pages/Loja.jsx';
import Produtos from './Pages/Produtos.jsx';
import Suporte from './Pages/Suporte.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProdutoPage from './Pages/PagProd.jsx';
import SobreNos from './Pages/SobreNos.jsx';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home />} />
        <Route path="Produtos" element={<Produtos />} />
        <Route path='Loja' element= {<Loja/>}></Route>
        <Route path='Suporte' element= {<Suporte/>}></Route>
        <Route path='SobreNos' element = {<SobreNos/>}></Route>
        <Route path="produto/:id" element={<ProdutoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
