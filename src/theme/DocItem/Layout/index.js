// src/theme/DocItem/Layout/index.js
import React from 'react';
import Head from '@docusaurus/Head';
import OriginalDocItem from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/theme-common/internal';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';

export default function DocItemWrapper(props) {
  const { metadata } = useDoc();
  const { permalink } = metadata;
  const sidebar = useDocsSidebar();

  // Find category data for current doc
  const findCategoryData = () => {
    if (!sidebar) return {};

    const findInItems = (items) => {
      for (const item of items) {
        if (item.type === 'category' && item.items) {
          const hasDoc = item.items.some(
            (subItem) => subItem.type === 'link' && subItem.href === permalink
          );

          if (hasDoc) {
            return item.customProps || {};
          }

          const found = findInItems(item.items);
          if (found) return found;
        }
      }
      return {};
    };

    return findInItems(sidebar.items) || {};
  };

  const categoryData = findCategoryData();
  const productName = categoryData.product_name;
  const productVersion = categoryData.product_version;

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
