# Categorizing Customizations

Part of the bundle removal process is to categorize all the customizations in your account, this is completed with saved searches and csv imports and exports (due to some limitations with mass updates).

Bundle components that do not have relationships outside the bundle or customizations that are not related to the bundle need to be flagged with CSV imports/exports since mass updates do not have summary criteria for this type of search.

## Create First Saved Search

1. Open __Lists__ > __Search > Saved Searches__
2. Click __Outside bundle with no relationships to the bundle__ saved search.
3. On the __Criteria__ tab, click __Standard__ and add the following filters:
|  | Filter | Description |
| --- | --- | --- |
| Filter 1 | Inactive | Is false |
| Filter 2 | Clean-Up Status | Is Not To Be Cleaned Up |
4. On the __Criteria__ tab, click __Summary__ and add the following:
| Summary   Type | Field | Description | Formula |
| --- | --- | --- | --- |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_data\_source.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_scripts.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_cust\_forms.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_wflws.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_list.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_searches.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
5. On the __Results__ tab, click __Columns__ and fill in the following:
| Field | Summary   Type | Formula |
| --- | --- | --- |
| Internal ID | Group |  |
| Name | Group |  |
| Parent | Group |  |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_data\_source.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_scripts.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_cust\_forms.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_wflws.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_list.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_searches.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' THEN 1 ELSE 0 END |
6. Click __Preview__.This step takes some time.Troubleshooting: [Saved Search Times Out](/docs/strongpointfornetsuite/troubleshooting/saved_search_times_out.md)

## Export and Import the CSV File

1. Export as a CSV file.

   ![Export to a CSV file](/img/product_docs/strongpointfornetsuite/bundle_removal/export_csv.png)
2. Open the CSV file and delete the __Overall Total row__.
3. __Save__ the CSV.
4. Open __Setup__ > __Import/Export__ > __Import CSV Records__
5. On the Import Assistant enter the following:

- __Import Type__: __Custom Records__
- __Record Type__: __Customization__

6. Click __Select__ and select the CSV file you just exported.
7. Click __Next__.
8. Under __Import Options__, choose __Update__.
9. Click __Next__.
10. Under __Field Mapping__, add:

- Internal ID
- Customization: Removal Scenario
- Customization: Removal Scenario 1

11. Click __Next__ and __Start the Import.__
12. Choose __Save & Run__.

## Create the Second Saved Search

1. Open __Lists__ > __Search__ > __Saved Searches__
2. Find the __In bundle with no outside relationships__ saved search.
3. Under the __Criteria__ tab, click on __Standard__ and add the following filters:
|  | Filter | Description |
| --- | --- | --- |
| Filter 1 | Inactive | Is false |
| Filter 2 | Clean-Up Status | Is Not To Be Cleaned Up |
4. On the __Criteria__ tab, click __Summary__ and add the following:
| Summary   Type | Field | Description | Formula |
| --- | --- | --- | --- |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_data\_source.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_data\_source},0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_cust\_forms.custrecord\_flo\_cleanup\_status} != 'Under Investigation' OR TO\_NUMBER(NVL({custrecord\_flo\_cust\_forms},0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_scripts.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_scripts},0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_wflws.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_wflws},0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_list.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_list},0)) < 1 THEN 0 ELSE 1 END |
| Sum | Formula (Numeric) | Is less than 1 | CASE WHEN {custrecord\_flo\_searches.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_searches},0)) < 1 THEN 0 ELSE 1 END |
5. On the __Results__ tab, click __Columns__ and fill in the following:
| Field | Summary   Type | Formula |
| --- | --- | --- |
| Internal ID | Group |  |
| Name | Group |  |
| Parent | Group |  |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_data\_source.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_data\_source},0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_cust\_forms.custrecord\_flo\_cleanup\_status} != 'Under Investigation' OR TO\_NUMBER(NVL({custrecord\_flo\_cust\_forms},0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_scripts.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_scripts},0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_wflws.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_wflws},0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_list.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_list},0)) < 1 THEN 0 ELSE 1 END |
| Formula (Numeric) | Sum | CASE WHEN {custrecord\_flo\_searches.custrecord\_flo\_cleanup\_status} = 'To Be Cleaned Up' OR TO\_NUMBER(NVL({custrecord\_flo\_searches},0)) < 1 THEN 0 ELSE 1 END |
6. Click __Preview__.This step takes some time.Troubleshooting: [Saved Search Times Out](/docs/strongpointfornetsuite/troubleshooting/saved_search_times_out.md)

## Export and Import the CSV File

1. Export as a CSV file.
2. Open the CSV file and delete the __Overall Total row__.
3. __Save__ the CSV.
4. Open __Setup__ > __Import/Export__ > __Import CSV Records__
5. On the Import Assistant enter the following:

- __Import Type__: __Custom Records__
- __Record Type__: __Customization__

6. Click __Select__ and select the CSV file you just exported.
7. Click __Next__.
8. Under __Import Options__, choose __Update__.
9. Click __Next__.
10. Under __Field Mapping__, add:

- Internal ID
- Customization: Removal Scenario
- Customization: Removal Scenario 2

11. Click __Next__ and __Start the Import.__
12. Choose __Save & Run__.

__Next Step:__ [](/docs/strongpointfornetsuite/bundle_removal/creating_four_mass_updates.md)[Creating Four Mass Updates](/docs/strongpointfornetsuite/bundle_removal/creating_four_mass_updates.md)
