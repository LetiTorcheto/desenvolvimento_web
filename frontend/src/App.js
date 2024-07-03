import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import HomeScreen from './screens/HomePage';
import ProdutoScreen from './screens/ProdutoScreen';
import CarrinhoScreen from './screens/CarrinnhoScreen';
import PerfilScreen from './screens/PerfilScreen';
import PedidoScreen from './screens/PedidoScreen';
import NavbarBar from './components/Navbar';
import LoginScreen from './screens/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarBar />
      <Container>
        <Route path="/" component={HomeScreen} />
        <Route path="/profile" component={PerfilScreen} />
        <Route path="/product/:id" component={ProdutoScreen} />
        <Route path="/cart" component={CarrinhoScreen} />
        <Route path="/order/:id" component={PedidoScreen} />
        <Route path="/login" component={LoginScreen} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
