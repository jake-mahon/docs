# Creating Four Mass Updates

Once you have created the first two mass updates and the two saved searches, you need to follow a similar process to make sure the rest of the objects have been included for the bundle removal.

## Mass Update Scenario 3

This mass update captures all the outside bundle components referenced by inside bundle components.

1. Open __Lists__ > __Mass Update__ > __Mass Updates__
2. Open __General Updates__ > __Custom Records__ > __Customization__
3. Check __Use Expressions__ on the __Criteria__ tab.
4. Add the following filters on the __Criteria__ tab:
|  | Parens | Filter | Description | Parens | And/Or |
| --- | --- | --- | --- | --- | --- |
| Filter 1 |  | Inactive | Is false |  | and |
| Filter 2 |  | Clean-Up Status | Is Under Investigation |  | and |
| Filter 3 | ( | Scripts: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 4 |  | Workflows: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 5 |  | Forms: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 6 |  | Searches/Mass Updates: Clean-Up Status | Is To Be Cleaned Up | ) |  |
5. Open the __Mass Update Fields__ tab.
6. Scroll down and check the box for __Removal Scenario__
7. Choose __Outside bundle referenced by inside__ from the drop down menu.
8. Check the box for __Removal Scenario 3__
9. Click __Save__

## Mass Update Scenario 4

This mass update captures all the bundle objects that are referencing non bundle components.

1. Open __Lists__ > __Mass Update__ > __Mass Updates__
2. Open __General Updates__ > __Custom Records__ > __Customization__
3. Check __Use Expressions__ on the __Criteria__ tab.
4. Add the following filters on the __Criteria__ tab:
|  | Filter | Description | Formula |
| --- | --- | --- | --- |
| Filter 1 | Inactive | Is false |  |
| Filter 2 | Clean-Up Status | Is to Be Cleaned Up |  |
| Filter 3 | Formula (Numeric) | Is 1 | CASE WHEN {custrecord\_flo\_data\_source.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' OR {custrecord\_flo\_list.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' OR {custrecord\_flo\_cust\_parent.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' OR THEN 1 ELSE 0 END |
5. Open the __Mass Update Fields__ tab.
6. Scroll down and check the box for __Removal Scenario__
7. Select __In bundle referencing record outside__ from the drop down menu.
8. Check the box for __Removal Scenario 4__
9. Click __Save__

## Mass Update Scenario 5

This mass update flags all Non bundle components dependent on bundle components.

1. Open __Lists__ > __Mass Update__ > __Mass Updates__
2. Open __General Updates__ > __Custom Records__ > __Customization__
3. Check __Use Expressions__ on the __Criteria__ tab.
4. Add the following filters on the __Criteria__ tab:
|  | Parens | Filter | Description | Parens | And/Or |
| --- | --- | --- | --- | --- | --- |
| Filter 1 |  | Inactive | Is false |  | and |
| Filter 2 |  | Clean-Up Status | Is Under Investigation |  | and |
| Filter 3 | ( | Data Source(s): Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 4 |  | List: Clean-Up Status | Is To Be Cleaned Up |  | or |
| Filter 5 |  | Parent: Clean-Up Status | Is To Be Cleaned Up | ) |  |
5. Open the __Mass Update Fields__ tab.
6. Scroll down and check the box for __Removal Scenario__
7. Choose __Outside bundle referencing inside__ from the drop down menu.
8. Check the box for __Removal Scenario 5__
9. Click __Save__

## Mass Update Scenario 6

This mass update captures all the bundle components referenced by non bundle components.

1. Open __Lists__ > __Mass Update__ > __Mass Updates__
2. Open __General Updates__ > __Custom Records__ > __Customization__
3. Check __Use Expressions__ on the __Criteria__ tab.
4. Add the following filters on the __Criteria__ tab:
|  | Filter | Description | Formula |
| --- | --- | --- | --- |
| Filter 1 | Inactive | Is false |  |
| Filter 2 | Clean-Up Status | Is to Be Cleaned Up |  |
| Filter 3 | Formula (Numeric) | Is 1 | CASE WHEN {custrecord\_flo\_searches.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' OR {custrecord\_flo\_scripts.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' OR {custrecord\_flo\_wflws.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' OR {custrecord\_flo\_cust\_forms.custrecord\_flo\_cleanup\_status} != 'To Be Cleaned Up' THEN 1 ELSE 0 END |
5. Open the __Mass Update Fields__ tab.
6. Scroll down and check the box for __Removal Scenario__
7. In __bundle referenced by outside__ from the drop down menu.
8. Check the box for __Removal Scenario 6__
9. Click __Save__

__Next Step:__ [](/docs/strongpointfornetsuite/bundle_removal/investigating_through_saved_searches.md)[Investigating Through Saved Searches](/docs/strongpointfornetsuite/bundle_removal/investigating_through_saved_searches.md)
