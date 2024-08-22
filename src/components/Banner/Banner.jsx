import React from 'react'
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
   <div className="parent-container flex items-center p-4 bg-white ">
      <a href="#" className="text-gray-800 hover:underline font-semibold text-lg">
        {t('home')}
      </a>
      <div className='link-container flex gap-3 '>
        <a href="#" className="text-gray-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {t('saved')}
        </a>
        <a href="#" className="text-gray-600 hover:underline">{t('motors')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('electronics')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('collectibles')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('home_garden')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('fashion')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('toys')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('sporting_goods')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('business_industrial')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('jewelry_watches')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('ebay_live')}</a>
        <a href="#" className="text-gray-600 hover:underline">{t('refurbished')}</a>
      </div>
    </div>

    </>
   
  )
}

export default Banner