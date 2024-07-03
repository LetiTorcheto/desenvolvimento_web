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
import Login from './screens/Login';
import RegisterScreen from './screens/Register';

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
