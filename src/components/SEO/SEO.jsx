import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, canonical, ogType = 'website', ogImage, keywords }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const siteName = currentLang === 'ar' ? 'وسائل النمو العقارية' : 'Wasael Alnomou Real Estate';
  
  // Default values
  const defaultTitle = currentLang === 'ar' 
    ? 'وسائل النمو العقارية | التطوير وإدارة الأملاك بالمدينة المنورة' 
    : 'Wasael Alnomou Real Estate | Development & Property Management';
    
  const defaultDesc = currentLang === 'ar'
    ? 'شركة وسائل النمو العقارية بالمدينة المنورة، خبرة متميزة في التطوير العقاري، التسويق، وإدارة الأملاك.'
    : 'Wasael Alnomou Real Estate Company in Madinah, expert in real estate development, marketing and property management.';

  const defaultKeywords = currentLang === 'ar'
    ? 'عقارات المدينة المنورة, تطوير عقاري, إدارة أملاك, وسائل النمو, شقق للبيع, استثمار عقاري'
    : 'Madinah real estate, property development, property management, Wasael Alnomou, apartments for sale, real estate investment';

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDesc = description || defaultDesc;
  const url = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="ar" href={url.replace('/en', '/ar')} />
      <link rel="alternate" hrefLang="en" href={url.replace('/ar', '/en')} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage || 'https://wasaelalnomou.com/logo.png'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={ogImage || 'https://wasaelalnomou.com/logo.png'} />
      
      {/* Direction & Language */}
      <html lang={currentLang} />
    </Helmet>
  );
};

export default SEO;
