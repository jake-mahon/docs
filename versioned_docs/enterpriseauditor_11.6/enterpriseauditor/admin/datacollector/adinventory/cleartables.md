# Clear ADInventory Tables

Sometimes when troubleshooting an ADInventory issue, it becomes necessary to clear the standard reference tables. Follow the steps.

__CAUTION:__ Be careful when using this query task. It will result in the deletion of collected data.

__Step 1 –__ Create a new job and assign a query using the __ADInventory__ Data Collector.

![Remove Tables task selected on Active Directory Inventory DC Wizard Category page ](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/categoryremovetables.png)

__Step 2 –__ In the Active Directory Inventory DC Wizard on the Category page, select the __Remove Tables__ category task.

__Step 3 –__ Click __Next__ and then __Finish__ to close the Active Directory Inventory DC Wizard. Click __OK__ to close the Query Properties window.

When the job is run, all of the ADInventory standard reference tables are removed from the database.

__CAUTION:__ Never leave the query task selected after job execution. Accidental data loss can occur.

_Remember,_ this job deletes data from the Enterprise Auditor database. Check the job has been configured correctly prior to job execution.
