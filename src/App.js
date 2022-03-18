
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Navbar } from './Components/Navbar';
import { Formdata } from './Components/form';
import {ProductsPage} from './Components/ProductsPage';
import { ProductsDetailsPage } from './Components/ProductsDetailsPage';
import {NotFoundPage} from './Components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Navbar />
    
     
    <Routes>
      <Route path="/" element={<Formdata />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<Formdata />} />
      <Route path="/products/:id" element={<ProductsDetailsPage />} />
      <Route path="/notfound" element={<NotFoundPage />} />
    </Routes>

    </div>
  );
}


export default App;
