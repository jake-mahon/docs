# Clean Up Unused Customizations

Platform Governance for NetSuite has powerful tools to analyze, organize and delete unused customizations in a safe and secure manner.

Cleaning up fields has a direct impact on system performance. Larger records load slower than small ones. When a record loads in NetSuite, the system formulates the SQL request, retrieves the data from the database, assembles the interface, retrieves any related list data or build the corresponding interface element (in edit mode) amongst other steps. While these are all highly optimized, records with large field sizes load slower. There can also be impact on system performance from alerts and other searches applied on demand to data when it is being saved (particularly if there are custom SQL formulas). The impact is dependent on the extent of the change and what else is causing performance lag.

You can organize clean up activities by record types to start with larger groups of customizations before progressing to individual customizations. For example you could progress in the following order:

- __Bundles__: Removing unused bundles eliminates large groups of records and other customizations
- __Records__: Removing records eliminates large groups of customizations
- __Forms/Scripts__: Depending on your requirements, you can move unused forms, scripts, fields and associated customizations to progress through your account

Cleaning up fields makes the account more understandable and reduces the likelihood of confusion.

The basic clean up process:

1. [Analyze Unused Customizations and Identify Dependencies](#Analyze-Unused-Customizations-and-Identify-Dependencies)
2. [Create Change Requests](#Create-Change-Requests)
3. [Archive Field Data](#Archive-Field-Data)
4. [Back Up Searches, Scripts and Workflows](#Back-Up-Searches-Scripts-and-Workflows)
5. [Delete Customizations](#Delete-Customizations)
6. [Close the Change Request](#Close-the-Change-Request)

## Analyze Unused Customizations and Identify Dependencies

1. Open __Strongpoint__ > __Clean Up__ > __Unused Customizations__
2. Enter filtering information to streamline your search. Searching on all unused customizations can take a long time to load and can time out.

   ![Enter criteria prior to searching for unused customizations](/static/img/product_docs/strongpointfornetsuite/clean_up/customizations_cleanup_unused_filters.png)
3. Click __Search__.  
    The results are coded with a flag in the first column and the text either blue (Inactive owner) or black.   
   ![Cleanup Key](/static/img/product_docs/strongpointfornetsuite/clean_up/customizations_cleanup_key.png)  
    You can hover over the flag for more information. If the text is blue, __Inactive Owner__ is displayed regardless of the flag color.

   ![customizations_cleanup_list](/static/img/product_docs/strongpointfornetsuite/clean_up/customizations_cleanup_list.png)
4. Click __View__ next to each Customization to investigate. You can right-click on __View__ and select __Open in a new tab or window__ to keep your results page available.

   ![View the Customization Record](/static/img/product_docs/strongpointfornetsuite/clean_up/customizations_cleanup_view_record.png)
5. Use the __ERD__, __Base Record__ and __Related Objects__ links to review the dependencies.  
    If you have a __Documentation and Optimization__ license:

   1. Click __Edit__ if you decide it is safe to delete the customization.
   2. Select __Actions__ > __Delete__
   3. Click __Save__
   4. Return to your Results page and continue your investigations.
        
      If you have an __Intelligent Change Management__ or __Enterprise__ license, continue with these steps using the Change Management features.

## Create Change Requests

You can group the customizations you are considering to delete and create a change request that includes those customizations. You can do this by editing the __Create Customizations__ or open an existing change request and add the customizations in the __Impacted Customizations__ under __Scope__.

The Impact Analysis is available in the Advanced Change Management Module. This appears as __Clean Up__ or __Impact Analysis__ as a tab at the bottom of the Change Request. It provides specific warnings and status for each customization attached to the Change Request.

![cleanupimpactanalysis](/static/img/product_docs/strongpointfornetsuite/clean_up/cleanupimpactanalysis.png)

The __Impact Analysis__ tab has the following elements:

__Can be safely deleted or modified__: A list of the customizations linked to the change request that do not trigger any of the warnings below.

__Archiving Status__: Users can set the archiving status for fields to be deleted. Archive status can have the following values:

- Pending
- Complete
- Skip
- Manually Complete

__Cannot Be Safely Deleted or Modified__: A list of the customizations linked to the change request that have triggered one of the following warnings:

- __Active Processes__: this customization is linked to an active process.
- __Critical Searches:__ this customization is used in a formula or filter of a search and could cause the search to break if modified or deleted. Fields that are only in criteria or results of searches do not trigger this warning since the search would still function. Searches that haven’t been used in over a year do not trigger this warning.
- __Dependent Scripts__: this customization is used in a script.
- __Recently Used__: this customization has been used in the last 6 months.
- __Dependent Workflows__: this customization is used in a workflow.
- __Dependent Integrations__: this customization is used in an integration with another system.

Follow your organization’s change management policies and procedures as well as NetSuite's best practices to determine if it is appropriate to delete any of the customizations.

## Archive Field Data

Once a Change Request has been approved the __Archive Customizations__ button is available. When clicked, any fields in the change request are archived and stored in the __File Cabinet__.

![archive](/static/img/product_docs/strongpointfornetsuite/clean_up/archive.png)

The status of those fields changes to __Archived__. The customization moves to the __Can Be Safely Deleted or Modified__ tab.

## Back Up Searches, Scripts and Workflows

While there is no mass un-delete functionality, critical information about scripts, searches and workflows are preserved in the Customization Record.

- __Searches__: All fields, filters, criteria and other search elements are documented in the Searches tab.
- __Scripts:__ A script archive file is attached to the customization record.
- __Workflow:__ Workflow actions, states, fields, conditions and other elements are documented in the Related Workflows tab.

The customization record of deleted customizations are inactive and accessible for future reference.

## Delete Customizations

There are two choices for deleting customizations:

- You can go to the customization record and delete it manually
- If you have the Advanced Change Management Module, you can use the go to the __Can be safely deleted or modified tab__ at the bottom of the change request to delete the customizations.

## Close the Change Request

Once all activities are complete, mark the change request as complete.
