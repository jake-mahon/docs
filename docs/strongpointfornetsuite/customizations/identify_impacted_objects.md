# Identifying Impacted Objects

You can find impacted objects in several ways:

> [Customization List](#Customization-List)
>
> [Customization Quick Search](#Customization-Quick-Search)
>
> [ERD View](#ERDView)
>
> [ERD Search Form](#ERD-Search-Form)
>
> [Customization Impact Search](#Customization-Impact-Search)
>
> [Other Customizations](#Other-Customizations)
>
> [Process Documentation](#Process-Documentation)

## Customization List

The customization list provides a complete list of all the customization records.

It enables you to:

- Filter the view.
- Access the Customization Record.
- Access the actual customization record by clicking on the __Link__ column on the right.

Changing the view enables you to access many clean up tools, which can also be accessed by going to __Clean Up__ located under the __Strongpoint__ tab.

To access the customization list:

1. Open __Strongpoint__> __Customizations__ > __Customization__
2. The recommended view is __Strongpoint Filter__ to enable the filters to narrow down your search.

![customization-list](/img/product_docs/strongpointfornetsuite/customizations/customization-list.webp)

## Customization Quick Search

To access a customization quick search, open __Strongpoint__ > __Customizations__ > __Customization Quick Search__

You can search using several factors and submit. When looking up by __Name__, using __Contains__ helps if you do not have the exact name.

![custquicksearch](/img/product_docs/strongpointfornetsuite/customizations/custquicksearch.webp)

## ERD View

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

   ![erd-view](/img/product_docs/strongpointfornetsuite/customizations/erd-view.webp)
5. Click on any item to expand the view. For large lists, click __More__ to see the additional items.  
   External sources headers are highlighted in green.

   ![ERD with an External Source](/img/product_docs/strongpointfornetsuite/customizations/celigo_erd.webp)
6. Click __Open Record__ on any Customization to open the actual record.

## ERD Search Form

The ERD search form enables you to search by different record types. You can also use it to create a Process Issue or a Change Request. Refer to [Enabling the ERD Search](/docs/strongpointfornetsuite/customizations/using_erd.md).

From the ERD Search Form, you can search by:

- Customization Type
- Script ID
- Name
- Parent
- Quick Add

![erdsearchform-2](/img/product_docs/strongpointfornetsuite/customizations/erdsearchform-2.webp)

Once you have finished your search, you can create a Process Issue or a Change Request from the results.

![erdsearchform-3](/img/product_docs/strongpointfornetsuite/customizations/erdsearchform-3.webp)

## Customization Impact Search

The Customization Impact Search displays customizations and the other customizations that are impacted by those customizations. For example, it will show if a field is used in a script or a search.

To access a customization quick search:

1. Select __Strongpoint__ > __Customizations__ > __Customization Impact Search Form__.
2. Enter any criteria to narrow the results as required.

![impactsearchform](/img/product_docs/strongpointfornetsuite/customizations/impactsearchform.webp)

## Other Customizations

Often looking at one customization leads to more questions about what other related customizations are linked to the one you are looking at. The tabs in the customization record provide links to other customizations by type.

## Process Documentation

Linking customizations to processes is a powerful way of understanding the function and impact of any customizations. The detailed step information in the __Process Assistant__ shows the links to customizations for that process.
