import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for managing page metadata
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogImage - OpenGraph image URL
 * @param {string} props.ogType - OpenGraph type (website, article, etc.)
 * @param {Object} props.schemaData - JSON-LD schema object
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/logo.png', 
  ogType = 'website',
  schemaData 
}) => {
  const siteName = 'Cirronyx';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Enterprise Cloud, AI & DevOps Consulting`;
  const siteUrl = 'https://cirronyx.com'; // Replace with actual production URL
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
