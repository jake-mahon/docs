import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import DocItem from '@theme-original/DocItem';
import { VERSIONED_PRODUCTS, NON_VERSIONED_PRODUCTS } from '../productMappings';

export default function DocItemWrapper(props) {
  const location = useLocation();
  const [productName, setProductName] = useState('');
  const [productVersion, setProductVersion] = useState('');

  // Extract product info from URL pattern using auto-generated mappings
  useEffect(() => {
    const urlParts = location.pathname.split('/').filter(Boolean);

    if (urlParts[0] === 'docs' && urlParts[1]) {
      const productPath = urlParts[1];

      // Check if it's a versioned product (has version in URL)
      if (urlParts[2]) {
        // Versioned product: /docs/productname/version
        const productDisplayName = VERSIONED_PRODUCTS[productPath] || productPath;
        setProductName(productDisplayName);
        setProductVersion(urlParts[2]);
      } else {
        // Non-versioned product
        const mapping = NON_VERSIONED_PRODUCTS[productPath];
        if (mapping) {
          setProductName(mapping.name);
          setProductVersion(mapping.version);
        }
      }
    } else {
      // Clear product info for non-docs pages
      setProductName('');
      setProductVersion('');
    }
  }, [location.pathname]);

  // Use useEffect to add meta tags to document head
  useEffect(() => {
    if (!productName) return;

    // Remove any existing product meta tags
    const existingTags = document.querySelectorAll('meta[name^="product"], meta[property^="og:product"]');
    existingTags.forEach((tag) => tag.remove());

    // Add basic product meta tags
    const metaProductName = document.createElement('meta');
    metaProductName.name = 'product-name';
    metaProductName.content = productName;
    document.head.appendChild(metaProductName);

    if (productVersion) {
      const metaProductVersion = document.createElement('meta');
      metaProductVersion.name = 'product-version';
      metaProductVersion.content = productVersion;
      document.head.appendChild(metaProductVersion);

      const metaProduct = document.createElement('meta');
      metaProduct.name = 'product';
      metaProduct.content = `${productName} ${productVersion}`;
      document.head.appendChild(metaProduct);
    }
  }, [productName, productVersion]);

  return <DocItem {...props} />;
}
