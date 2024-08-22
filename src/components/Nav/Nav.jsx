import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import  colc from '../../assets/colc.svg'
import shop from '../../assets/shop.svg'
import logo from '../../assets/logo.svg'
import { useTranslation } from 'react-i18next'




const Nav = () => {
  const { t, i18n } = useTranslation();
  return (
    
    <>
     <div className="flex items-center p-4 border-b gap-[50px] bg-white">
        <h1 className="text-lg font-bold">
          {t('Hi')} <Link to="/login" className="text-blue-500 w-[100px]"> {t('Sign in')} </Link> {t('or')} <Link to="/login" className="text-blue-500 w-[100px]">{t('Register')}</Link>
        </h1>
        
        <div className='flex gap-8'>
          <h3 className="flex gap-8">
            <p className="hover:text-blue-500 cursor-pointer w-[200px]">{t('Daily Deals')}</p>
            <p className="hover:text-blue-500 cursor-pointer w-[200px]">{t('Brand Outlet')}</p>
            <p className="hover:text-blue-500 cursor-pointer w-[200px]">{t('Help & Contact')}</p>
          </h3>
        </div>

        <div className="flex items-center space-x-4">
          <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
          <p className="hover:text-blue-500 cursor-pointer">{t('Watchlist')}</p>
          <p className="hover:text-blue-500 cursor-pointer">{t('My eBay')}</p>
          <div className="flex space-x-3 cursor-pointer">
            <img src={colc} alt="icon1" className="w-6 h-6" />
            <img src={shop} alt="icon2" className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex items-center p-4 bg-white">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[220px] ml-[-100px] cursor-pointer" />
          </NavLink>
        </div>

        <div className="flex items-center space-x-2">
          <p className="hover:underline cursor-pointer ml-[-250px]">{t('Shop by category')}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="flex items-center w-full max-w-2xl ml-[150px]">
          <input  
            type="text" 
            placeholder= {t ('Search for anything' )} 
            className="w-[500px] py-2 px-4 border rounded-l-lg ml-[-170px] focus:outline-none"
          />
          <select className="border-t border-b border-r py-2 px-2 focus:outline-none">
            <option>{t('All Categories')}</option>
          </select>
          <button className="bg-blue-500 text-white py-2 px-20 ml-[10px] rounded-[2px]">
            {t('Search')}
          </button>
          <p className="ml-2 text-gray-400 hover:underline cursor-pointer">{t('Advanced')}</p>
        </div>
      </div>


    </>
  
  
  )
}

export default Nav