# Creating Two Mass Updates

## First Mass Update

The first mass update flags all the bundle components to be cleaned up and set the status on the Customization to __To Be Cleaned Up__. It identifies everything needing removal.

To create the first mass update:

1. Open __Lists__ > __Mass Update__ > __Mass Updates__.
2. Open __General Updates__ > __Custom Records__ > __Customization__.
3. Check __Use Expressions__ on the __Criteria__ tab.

   ![Select Use Expressions](/img/product_docs/strongpointfornetsuite/bundle_removal/bundle_removal_use_expressions.png)
4. Add the following filters on the __Criteria__ tab:
|  | Parens | Filter | Description | Parens | And/Or |
| --- | --- | --- | --- | --- | --- |
| Filter 1 |  | Inactive | Is false |  | and |
| Filter 2 | ( | Bundle | Bundle ID |  | or |
| Filter 3 |  | Bundle | Bundle ID | ) |  |

You can remove more than one bundle at a time.

![Mass Update Filters](/img/product_docs/strongpointfornetsuite/bundle_removal/mass_update_filters.png)

1. Open the __Mass Update Fields__ tab.
2. Scroll down and check the box for __Clean Up Status__.
3. Enter the __Clean Up Status__: __To Be Cleaned Up__.

   ![Set Clean Up Status](/img/product_docs/strongpointfornetsuite/bundle_removal/clean_up_status.png)
4. Click __Save__.

## Second Mass Update

The second mass update flags all the objects related to the bundle and sets a status on the Customization to __To Be Investigated__. It identifies everything needing investigation.

1. Open __Lists__ > __Mass Update__ > __Mass Updates__
2. Open __General Updates__ > __Custom Records__ > __Customization__
3. Check __Use Expressions__ on the __Criteria__ tab.
4. Add the following filters on the Criteria tab:
|  | Parens | Filter | Description | Parens | And/Or |
| --- | --- | --- | --- | --- | --- |
| Filter 1 |  | Inactive | Is false |  | and |
| Filter 2 |  | Clean-Up Status | Is Not To Be Cleaned Up |  | and |
| Filter 3 | ( | Data Sources: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 4 |  | Scripts: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 5 |  | Forms: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 6 |  | Workflows: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 7 |  | List: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 8 |  | Searches/Mass Updates:    Clean-Up Status | Is To Be Cleaned Up | ) |  |

![Adding filters](/img/product_docs/strongpointfornetsuite/bundle_removal/mass_update_filters2.png)

5. Open the __Mass Update Fields__ tab.
6. Scroll down and check the box for __Clean Up Status__
7. Enter the __Clean Up Status__: __Under Investigation__
8. Click __Save__

__Next Step:__ [Creating a Custom List and Fields](/docs/strongpointfornetsuite/bundle_removal/creating_custom_list_and_fields.md)
