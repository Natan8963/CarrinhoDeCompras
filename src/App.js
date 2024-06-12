
import Header from './componentes/Header/Header';
import './index.css';
import Products from './componentes/Products/Product';
import Provider from './context/Provider';
import Cart from './componentes/Cart/Cart';
function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;