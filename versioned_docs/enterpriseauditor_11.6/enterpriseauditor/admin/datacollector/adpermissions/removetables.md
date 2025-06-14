# Remove ADPermissions Tables

If it becomes necessary to clear the ADPermissions Data Collector tables and views to resolve an issue, create a new job using it as the query source and select the Remove Tables category. The Connection Profile applied should be the same as the one used for the associated __Active Directory Permissions Analyzer__ > __0.Collection__ Job. Follow the steps.

__CAUTION:__  Using this query task results in the deletion of collected data.

__Step 1 –__ Create a new job and assign a query using the __ADPermissions__ Data Collector.

__Step 2 –__ In the Active Directory Permissions Data Collector Wizard, on the Category page select the __Remove Tables__ category and click __Next__.

__Step 3 –__ On the Results page, make sure all the Available Properties are selected and click __Next__.

__Step 4 –__ Click __Finish__ to close the Active Directory Permissions Data Collector Wizard. Click __OK__ to close the Query Properties window.

When the job is run, all of the ADPermissions standard reference tables are removed from the database.

_Remember,_  this job deletes data from the Enterprise Auditor database. Ensure the job has been configured correctly prior to executing the job.

__CAUTION:__ Never leave the query task selected after the job has been executed. Accidental data loss can occur.
