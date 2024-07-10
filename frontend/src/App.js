import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import HomeScreen from './screens/HomePage';
import ProdutoScreen from './screens/ProdutoScreen';
import CarrinhoScreen from './screens/CarrinnhoScreen';
import PerfilScreen from './screens/PerfilScreen';
import PedidoScreen from './screens/PedidoScreen';
import NavbarBar from './components/Navbar';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import Contato from './screens/Contato';
import CriarProduto from "./screens/CriarProduto";
import PlaceOrderScreen from './screens/PlaceOrder';
import Catalogo from './screens/CatalogoScren';

function App() {
  return (
    <Router>
      <NavbarBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<PerfilScreen />} />
          <Route path="/product/:id" element={<ProdutoScreen />} />
          <Route path="/cart" element={<CarrinhoScreen />} />
          <Route path="/order/:id" element={<PedidoScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/contact" element={<Contato/>} />
          <Route path="/criarproduto" element={<CriarProduto/>}/>
          <Route path="/placeoreder" element={<PlaceOrderScreen/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;