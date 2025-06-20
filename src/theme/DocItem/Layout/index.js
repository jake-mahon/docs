// src/theme/DocItem/Layout/index.js
import React from 'react';
import Head from '@docusaurus/Head';
import OriginalDocItem from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function DocItemWrapper(props) {
  const { metadata } = useDoc();

  // Extract from source path or unversionedId
  const source = metadata.source || metadata.unversionedId || '';
  let productName = null;
  let productVersion = null;

  // Check if it's 1secure
  if (source.includes('1secure') || metadata.pluginId === '1secure') {
    productName = '1Secure';
    productVersion = 'SaaS';
  }
  // Add other products...

  return (
    <>
      <Head>
        {productName && <meta name="product-name" content={productName} />}
        {productVersion && <meta name="product-version" content={productVersion} />}
      </Head>

      <OriginalDocItem {...props} />
    </>
  );
}
