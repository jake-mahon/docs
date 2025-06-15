# Using the ERD

The Entity Relationship Diagram, __ERD__ is a visual representation of your Customizations where you can easily review the relationships and dependencies. The ERD is easily accessible:

- __Strongpoint__ > __Customizations__ > __ERD View__
- ERD Search, refer to Enabling the ERD Search on the Dashboard
- Tabs on various pages, for example, Customization record, Change Requests, and Process Issues.

The ERD provides a way to look at customizations by record type. A left click on the customization name brings up the customization record.

1. Open __Strongpoint__> __Customizations__ > __ERD View__
2. Select a __Record Type__ from the list.
3. Add any options:

   - __Field Name Filter__: enter all or part of a field name to filter the results.
   - __Date Last Used Filter__: enter a date range to filter the results.
   - __Hide standard fields without relationships__: check this box to hide all standard fields that do not have relationships from the results.
   - __Hide all standard fields__: check this box to hide all standard fields from the results.
   - __Hide all fields without custom relationships__: check this box to hide all unused fields that do not have custom relationships from the results.
   - __Hide Unused fields__: check this box to hide all unused fields from the results, based on the DLU.
4. Click __Show Record ERD__.

   ![erd-view](../../../static/img/product_docs/strongpointfornetsuite/customizations/erd-view.webp)
5. Click on any item to expand the view. For large lists, click __More__ to see the additional items.  
   External sources headers are highlighted in green.

   ![ERD with an External Source](../../../static/img/product_docs/strongpointfornetsuite/customizations/celigo_erd.webp)
6. Click __Open Record__ on any Customization to open the actual record.

## Enabling the ERD Search on the Dashboard

To enable the ERD Search:

1. From NetSuite __Home__, go to __Personalize__ (On the right-hand side of the page.)
2. Select __Custom Portlet__. (If it shows many Custom Portlets, you can pick any one of them.)
3. Choose __Set Up__
4. Under __Custom Content__, select __Strongpoint ERD Search Form__
5. Click __Save__

![erdsearchform-1](../../../static/img/product_docs/strongpointfornetsuite/customizations/erdsearchform-1.webp)

From the ERD Search Form, you can search by:

- Customization Type
- Script ID
- Name
- Parent
- Quick Add
