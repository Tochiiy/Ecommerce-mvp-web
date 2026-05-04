import getProducts from"../Data/products"
import {Link} from "react-router-dom"
import ProductCart from "../components/ProductCart";
const Home = () => {
  const products = getProducts();
  return (
    <div  className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to HUBSHUP</h1>
        <p className="home-subtitle">Discover Amazing Products at Amazing Prices</p>
       <div className="container"></div>
       <h2 className="page-title">Our Products</h2>

       <div className="product-grid">
        {products.map((product) =>
        (
          <ProductCart product={product} key={product.product_id}/>
        )
        )}
       </div>
      </div>
    </div>
  );
};

export default Home;