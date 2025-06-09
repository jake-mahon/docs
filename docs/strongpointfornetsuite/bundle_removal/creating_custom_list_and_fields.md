# Creating a Custom List and Fields

Seven custom fields and one custom list needs to be created for the bundle’s customization records. The custom list holds six different values to view the different scenarios that are covered. The customization records have one custom field to show the name of the scenario that the customization belongs to and six different check boxes, one for each scenario.

## Create a Custom List

1. Open __Customization__ > __Lists, Records, & Fields__ > __Lists__ > __New__
2. Enter a __Name__ for the list, for example, __Bundle Removal Scenarios__
3. On the Values tab add these values:

   1. Outside bundle with no relationships to the bundle
   2. In bundle with no outside relationships
   3. Outside bundle referenced by inside
   4. In bundle referencing record outside
   5. Outside bundle referencing inside
   6. In bundle referenced by outside

      ![Create a Custom List](/img/product_docs/strongpointfornetsuite/bundle_removal/customlist.png)

## Create Custom Fields

1. Open __Customization__ > __Lists, Records, & Fields__ > __Record Types__
2. Click on __Customization__ in the record type list.
3. Click __New Field__ on the __Fields__ tab.
4. Add the new Field information:

   - __Label__: Removal Scenario
   - __Type__: List/Record
   - __List/Record__: the name of your new list, for example __Bundle Removal Scenarios__
5. Add the six removal scenario (Removal Scenario 1 ... Removal Scenario 6) check boxes:

   - __Label__: Removal Scenario 1
   - __Type__: List/Record
   - __List/Record__: Checkbox
6. Click __Save__

__Next Step:__ [Categorizing Customizations](/docs/strongpointfornetsuite/bundle_removal/categorizing_customizations.md)
