import React from 'react';
import ProductMetaTags from '@site/src/components/ProductMetaTags';

// Default implementation from Docusaurus
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/Root/index.tsx
export default function Root({ children }) {
  return (
    <>
      <ProductMetaTags />
      {children}
    </>
  );
}
