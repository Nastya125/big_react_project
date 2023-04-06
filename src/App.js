import './App.css';
import './components/Header/header.css';
import './components/Earphones/earphones.css';
import './components/Launches/launches.css';
import './components/Products/products.css';
import './components/Sellers/sellers.css';
import './components/footer/footer.css';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sellers from './components/Sellers/Sellers';
import Earphones from './components/Earphones/Earphones';
import Launches from './components/Launches/Launches';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Sellers />
      <Earphones />
      <Launches />
      <Footer />
    </div>
  );
}

export default App;
