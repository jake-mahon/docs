# Archive Fields

When cleaning up your account with Platform Governance for NetSuite clean up tools, you may find fields that are no longer in use and you want to delete them. To do this you need to create a Change Request and add the fields you want to delete.

## Create a Change Request to Archive Fields

To create a change request:

1. Open Strongpoint > __Change Management__ > __Change Request__
2. Fill out all relevant fields and include all the customization you want to delete in the __Customizations__ field, add the customizations you want to delete.
3. Click __Save__.
4. Click the __Impact Analysis__ button.
5. Under the __Impact Analysis tab__, the customizations you selected are listed under one or more tabs:

- Can Be Safely Deleted or Modified
- Cannot Be Safely Deleted or Modified or
- Inactive Customizations (Already Deleted)

![archivefields1](/static/img/product_docs/strongpointfornetsuite/clean_up/archivefields1.png)6. Click on the __Archive Customizations__ if you find your customizations under __Cannot Be Safely Deleted or Modified__ and under __Warning it says Not Archived__
![archivefields2](/static/img/product_docs/strongpointfornetsuite/clean_up/archivefields2.png)7. Once your customizations are processed and archived, your customizations are listed under __Can be Safely Deleted or Modified__. Your [archive folder](/docs/product_docs/strongpointfornetsuite/clean_up/set_up_archive_folder.md) has the CSV file you can download. The file name has the field type and the script ID.
