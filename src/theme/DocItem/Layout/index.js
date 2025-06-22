import React from 'react';
import Head from '@docusaurus/Head';
import OriginalDocItem from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';

export default function DocItemWrapper(props) {
  let metadata, sidebar;

  try {
    const docContext = useDoc();
    metadata = docContext?.metadata;
    sidebar = useDocsSidebar();
  } catch (e) {
    return <OriginalDocItem {...props} />;
  }

  if (!metadata || !sidebar) {
    return <OriginalDocItem {...props} />;
  }

  const { permalink } = metadata;

  // Function to traverse sidebar and collect ALL category data from root to current doc
  const findAllCategoryData = () => {
    if (!sidebar?.items) return {};

    let allCategoryData = {};

    const searchCategories = (items, inheritedData = {}) => {
      for (const item of items) {
        if (item.type === 'category') {
          // Merge current category's customProps with inherited data
          const currentData = {
            ...inheritedData,
            ...(item.customProps || {}),
          };

          if (item.items) {
            // Check if current document is in this category
            for (const subItem of item.items) {
              if (
                (subItem.type === 'link' && subItem.href === permalink) ||
                (subItem.type === 'doc' &&
                  (subItem.href === permalink || `/docs/${subItem.id}` === permalink))
              ) {
                // Found the document - return all accumulated category data
                return currentData;
              }
            }

            // Recursively search subcategories with accumulated data
            const result = searchCategories(item.items, currentData);
            if (result && Object.keys(result).length > 0) {
              return result;
            }
          }
        }
      }
      return {};
    };

    return searchCategories(sidebar.items);
  };

  // Get all category data from root to current document
  const categoryData = findAllCategoryData();

  // Extract product info - version-specific data takes precedence over product-level data
  const productName = categoryData.product_name || null;
  const productVersion = categoryData.product_version || null;

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
