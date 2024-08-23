import { AiOutlineArrowRight } from "react-icons/ai"; 
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './category.css'

const Category = () => {
    const [products, setProducts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
          .then(response => {
            setProducts(response.data.products.slice(9, 12)); 
          })
          .catch(error => {
            console.error("There was an error fetching the products!", error);
          });
      }, []);

  return (
   <>
    <div className="flex p-8 bg-orange-300">
      <div className="w-1/3 p-8 bg-orange-300 my-[20px] font-[sans-serif] font-[400]">
        <h2 className="text__link">
          {t('super_savings')}
        </h2>
        <p className="text-lg mb-6">
          {t('discount')}
        </p>
        <button className="button mb-6 text-black border-black px-8 py-2 flex items-center hover:transition-colors duration-300">
          {t('shop_now')}
          <AiOutlineArrowRight className="ml-2 w-4 h-4 my-[4px] transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      
      <div className="flex w-2/3">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-orange-300 p-4 w-1/3 translate-y-0 scale-105 group hover:scale-100">
            <h3 className="text-xl font-bold mb-2 flex"> 
              {product.title}
              <AiOutlineArrowRight className="ml-2 w-4 h-4  my-[7px] transform transition-transform duration-300 group-hover:translate-x-1" />   
            </h3>  
            <img src={product.thumbnail} alt={product.title} className="h-45 w-45 object-contain mb-4" />
          </div>
        ))}
      </div>
      
    </div>
   </>
  );
}

export default Category;
