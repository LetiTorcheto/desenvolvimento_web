import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import HomeScreen from './screens/HomePage';
import ProdutoScreen from './screens/ProdutoScreen';
import CarrinhoScreen from './screens/CarrinnhoScreen';
import PrerfilScreen from './screens/PerfilScreen';
import PedidoScreen from './screens/PedidoScreen';
import NavbarBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarBar />
      <Container>
        <Routes>
          <Route path="/" Component={<HomeScreen />} />
          <Route path="/profile" Component={<PrerfilScreen />} />
          <Route path="/product/:id" Component={<ProdutoScreen />} />
          <Route path="/cart" Component={<CarrinhoScreen />} />
          <Route path="/order/:id" Component={<PedidoScreen />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
