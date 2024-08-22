import React from 'react'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-8 text-gray-500 cursor-pointer my-8">
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      
     
      <div>
        <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">{t('footer_buy')}</h2>
        <p className="mb-2 hover:text-gray-300">{t('footer_registration')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_money_back_guarantee')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_bidding_help')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_stores')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_ebay_charity')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_charity_shop')}</p>
        <p className="hover:text-gray-300">{t('footer_sales_events')}</p>
      </div>

    
      <div>
        <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">{t('footer_sell')}</h2>
        <p className="mb-2 hover:text-gray-300">{t('footer_selling_on_ebay')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_start_ad')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_ad_center')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_ad_format')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_reserve_price')}</p>
        <p className="mb-4 hover:text-gray-300">{t('footer_find_reseller')}</p>

        <h3 className="text-lg font-semibold mb-2 hover:text-blue-400">{t('footer_tools_apps')}</h3>
        <p className="mb-2 hover:text-gray-300">{t('footer_developers')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_security_center')}</p>
        <p className="hover:text-gray-300">{t('footer_amazon_appstore')}</p>
      </div>

     
      <div>
        <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">{t('footer_stay_connected')}</h2>
        <div className="flex items-center mb-4 hover:text-gray-300">
          <img src={facebook} alt="Facebook" className="w-6 h-6 mr-2 ml-[0]" />
          <p>Facebook</p>
        </div>
        <div className="flex items-center hover:text-gray-300">
          <img src={twitter} alt="Twitter" className="w-6 h-6 mr-2 ml-[0px]" />
          <p>Twitter</p>
        </div>
      </div>

     
      <div>
        <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">{t('footer_about_ebay')}</h2>
        <p className="mb-2 hover:text-gray-300">{t('footer_newsroom')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_investors')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_corporate_info')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_mobile')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_jobs')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_investor_relations')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_accessibility')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_supply_chain_act')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_suppliers')}</p>
        <p className="hover:text-gray-300">{t('footer_corporate_responsibility')}</p>
      </div>

      
      <div>
        <h2 className="text-lg font-semibold mb-4 hover:text-blue-400">{t('footer_help_contact')}</h2>
        <p className="mb-2 hover:text-gray-300">{t('footer_help')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_customer_service')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_shipping_returns')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_payment_options')}</p>
        <p className="mb-2 text-lg font-semibold mt-4 hover:text-blue-400">{t('footer_faqs')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_find_store')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_amazon_assistant')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_amazon_business')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_amazon_web_services')}</p>
        <p className="mb-2 hover:text-gray-300">{t('footer_gift_cards')}</p>
        <p className="hover:text-gray-300">{t('footer_corrections')}</p>

        <h3 className="text-lg font-semibold mt-4 hover:text-blue-400">{t('footer_ebay_sites')}</h3>
      </div>

    </div>

    <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
      <p className="text-sm text-gray-400 hover:text-gray-200">
        {t('footer_copyright')}
      </p>
    </div>
  </footer>
  
  
  )
}

export default Footer