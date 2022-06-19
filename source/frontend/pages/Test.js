import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Test = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get("https://shoppingapiacme.herokuapp.com/shopping")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="bg-slate-800">
        <div className="flex  items-center">
          {products.map((product) => (
            <div className=" text-center p-10 w-40 text-white">
              <img src={product.image} alt="" />
              <h3 className="font-bold">{product.brand}</h3>
              <p>{product.item}</p>
            </div>
          ))}
        </div>
      </div>
      {/* hehe */}
      <div className="flex  items-center">
        {products.map((product) => (
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <img src={product.image} alt="" />

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {product.brand}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  BUY
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* hehe */}
      </div>
    </>
  );
};

export default Test;
