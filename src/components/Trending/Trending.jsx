import React from 'react'
import div from '../../assets/div.png'
import love from '../../assets/klove.png'
import ebay from '../../assets/ebay.svg'
import { AiOutlineArrowRight } from "react-icons/ai"; 
import '../Trending/trending.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Trending = () => {
  const { t } = useTranslation();
  return (
   <>
    <div className="flex md:flex-row border-t border-gray-200">
        <div className="flex-col p-4">
          <div className="text-sm text-gray-500 mb-2">
            {t('featured')}
          </div>
          <img src={ebay} alt="Ebay Logo" className="w-24 mb-4 ml-[-2px]" />
          <div className="text-xl font-semibold mb-2 text-gray-600 font-sans text-start">
            {t('deals_made_easy')}
          </div>
          <div className="text-gray-600 mb-4">
            {t('free_shipping_prices')}
          </div>
          <button className="px-3 py-2 w-[200px] bg-white border border-gray-400 rounded shadow hover:bg-gray-100 flex items-center">
            {t('get_your_thing')} <span className="ml-2">→</span>
          </button>
        </div>
        <div className="flex flex-1">
          <img className="w-[500px] object-contain ml-[300px]" src={div} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="p-4">
            <img className="w-[310px] object-contain" src={love} alt="" />
          </div>
        </div>
      </div>
      <div className='my-[40px] flex trending'>
        <p className="text-2xl font-semibold mb-2 text-gray-600 font-sans text-start">
          {t('todays_deals')}
        </p>
        <span className='flex my-[10px] hover:scale-125 text-gray-600 ml-[400px] text-[24px]'>
          <Link to="/Collection">{t('see_all')}</Link>
          <AiOutlineArrowRight className="ml-2 my-[12px] w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
   </>
);
};

  


export default Trending