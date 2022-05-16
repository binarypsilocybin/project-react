import React, { useEffect, useState, useContext } from "react";
import Product from "../onlineFetch/Product";
import Loader from "../Loader";
import { AppContext } from "../onlineFetch/AppContext";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const app = useContext(AppContext);

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <p>Shopping in {app.currency}</p>
      <div className="store-front">
        {isLoading && <Loader />}
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
}
