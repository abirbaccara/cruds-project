import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductCreate from './ProductCreate';
import ProductDetail from './ProductDetail';
import ProductEdit from './ProductEdit';
import ProductSearch from './ProductSearch';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUDS Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/cruds-project/create" element={<ProductCreate />}></Route>

          <Route path="/cruds-project/detail/:prodid" element={<ProductDetail />}></Route>
          <Route path="/cruds-project/edit/:prodid" element={<ProductEdit />}></Route>
          <Route path="/cruds-project/search" element={<ProductSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
