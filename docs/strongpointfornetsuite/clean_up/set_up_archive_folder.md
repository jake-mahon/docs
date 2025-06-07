# Set Up the Archive Folder

Advanced Change Management allows data within customization to be archived during the Clean Up process. An archive folder must be created before the Clean Up process.

## Create the Archive Folder

1. Open __NetSuite Home__ > __Set Preferences__
2. Under __Defaults__, make sure __Show Internal IDS__ is checked on the __General__ tab.
3. Click __Save__
4. Open __Documents__ > __Files__ > __File Cabinet__ > __New__
5. Name the folder __Strongpoint Archived Data Files__.
6. Enter __Documents and Files__ in __Sub-Folder Of__
7. Best practice is to add a meaningful description.
8. Click __Save__
9. Note the __Internal ID__ for your new __Strongpoint Archived Data Files__ folder. __48783__ in this example.

   ![Finding the Internal ID of the Archive Folder](/static/img/product_docs/strongpointfornetsuite/clean_up/internal_id.png)

## Assign the Internal ID to the Deployed Script

To assign the internal ID to a deployed script:

1. Open __Customization__ > __Scripting__ > __Scripts__
2. Change the __Type__ Filter to __Scheduled__ and __From Bundle__ to __294336__
3. Click __View__ by the __Strongpoint Auto Archive__

![scripts-1](/static/img/product_docs/strongpointfornetsuite/clean_up/scripts-1.png)

4. Open the __Deployments__ tab.
5. Click on __Strongpoint Auto Archive – OD__.

   ![scripts-2](/static/img/product_docs/strongpointfornetsuite/clean_up/scripts-2.png)
6. Click __Edit__
7. Open the __Parameters__ tab, add the internal ID of your __Archive Folder__
8. Click Save

   ![scripts-3](/static/img/product_docs/strongpointfornetsuite/clean_up/scripts-3.png)

The archiving function on Change Requests is now set up and ready to use.
