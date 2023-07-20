import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter products based on the search query
  const filteredProducts = products.filter((product) => {
    const { title, price, quantity } = product;
    const query = searchQuery.toLowerCase();
    return (
      title.toLowerCase().includes(query) ||
      price.toString().includes(query) ||
      quantity.toString().includes(query)
    );
  });

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Fetch data from the API or any data source
    fetch('http://localhost:8000/cruds-project')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Recherche par titre, prix ou quantité..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="form-control mt-3"
      />
      <table className="table table-bordered mt-3">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="col-lg-12">
        <div className="form-group">
            <Link to="/" className="btn btn-danger">Retour à la liste</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
