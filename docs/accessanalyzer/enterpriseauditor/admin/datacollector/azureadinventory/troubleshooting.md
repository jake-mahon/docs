# Troubleshooting AzureADInventory Data Collector

## Clear AzureADInventory Tables

Sometimes when troubleshooting an AzureADInventory issue, it becomes necessary to clear the standard reference tables. Follow the steps.

__Step 1 –__ Create a new job and assign a query using the __AZUREADINVENTORY__ Data Collector.

__Step 2 –__ In the Entra ID Inventory DC Wizard on the Category page, select the __Remove Tables__ category task.

__Step 3 –__ Click __Next__ and then __Finish__ to close the Entra ID Inventory DC Wizard. Click __OK__ to close the Query Properties window.

When the job is run, all of the AzureADInventory standard reference tables are removed from the database.

## Troubleshooting Error Messages

Change the XML parameters to address the following errors:

Error: Microsoft.Graph.ServiceException: Code: timeout Message: The request timed out

Update the ```<MaximumNumberOfRetries>``` parameter to update the number of retries to run the query. The default is 3.

Error: An existing connection was forcible closed by the remote host

Update the ```<MaxDeltaTokenAgeInDays>``` parameter to update the max delta token age. The default is 6.

See the [View Job XML File](../../jobs/job/properties/viewxml.md) topic for additional information.
