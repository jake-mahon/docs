# Exporting Information to Excel

You can export the information from the removal scenarios to Excel and then search for the customizations affected by the bundle removal. Here is an example of using the removal scenarios 5 and 6 to find affected customizations.

- Scenario 5: __Outside bundle referencing inside__. All customizations built in the account that make use of the bundle components.
- Scenario 6: __In bundle referenced by outside__. Opposite of Scenario 5

## Export the Results

To export the results to Excel:

1. Select __View__ on __Removal Scenarios 5 and 6__.
2. Click on the __Excel__ icon.
3. Export __Removal Scenario 5__ and __Scenario 6__ to Excel.
4. Choose the record you want to investigate. (for example, __custom open task default__)
5. Each record shows all its relationships (both inside and outside bundle).

## Find Relationships that Only Exist Within the Bundle

To find the relationships that only exist within the bundle:

1. Copy the name of a record.
2. Go to the opposite scenario and do a search with the pasted name.
3. This shows you the bundle components that are being used so you are aware of what will be removed when the bundle is gone. These are the records that need to be replicated.

__Next Step:__ [](/docs/product_docs/strongpointfornetsuite/bundle_removal/final_tasks.md)[Final Tasks](/docs/product_docs/strongpointfornetsuite/bundle_removal/final_tasks.md)
