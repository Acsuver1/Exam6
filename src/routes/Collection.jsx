import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/apple.png"; 

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [loadingSingle, setLoadingSingle] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  const handleNavigate = (productId) => {
    setLoadingSingle(true); 
    setTimeout(() => {
      navigate(`/single/${productId}`);
      setLoadingSingle(false); 
    }, 1000); 
  };

  return (
    <>
      {loading || loadingSingle ? ( 
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div> { }
          <p className="text-xl font-bold"></p>
        </div>
      ) : (
        <div className="p-4">
          <div className="rounded-md">
            <img src={apple} alt="Apple" />
            <h2 className="text-2xl font-bold mb-2 my-2">Up to 60% off Apple tech</h2>
            <p>Save on AirPods, iPhones, and more.</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded-md p-4 flex flex-col justify-between">
                <div>
                  <div onClick={() => handleNavigate(product.id)}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="mb-2 cursor-pointer transform transition-transform duration-300 ease-in-out translate-y-0 scale-100 hover:scale-110 hover:translate-y-[-10px]"
                    />
                  </div>
                  <h3 className="font-bold text-[20px]">{product.title}</h3>
                  <p>{product.description}</p>
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                  <span className="line-through text-gray-500">${(product.price * 1.2).toFixed(2)}</span>
                  <span className="ml-2">{Math.floor(product.discountPercentage)}% OFF</span>
                  <p className="text-red-500">{product.category}</p>
                  <p className="text-green-500 font-semibold">{product.discountPercentage}% off</p>
                </div>
                <button className="bg-blue-400 w-full h-[40px] text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-800">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Collection;
