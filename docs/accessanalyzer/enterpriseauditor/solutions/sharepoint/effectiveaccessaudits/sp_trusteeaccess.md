# Scoping > SP_TrusteeAccess Job

The SP_TrusteeAccess job allows you to scope a list of users to audit their access across the SharePoint environment. You can also accomplish this by looking users up in the Access Information Center, however you want to utilize this job in scenarios where you want to generate a report on multiple users’ effective access at once.

__NOTE:__ Trustees can be specified in the ```UserScoping.csv``` file for the SP_TrusteeAccess Job. See the [Configure CSV File for the Query for the SP_TrusteeAccess Job](#configure-csv-file-for-the-query-for-the-sp_trusteeaccess-job) topic for additional information.

![Scoping > SP_TrusteeAccess Job in the Jobs Tree](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/scopingjobstree.webp)

The SP_TrusteeAccess job is located in the Scoping Job Group.

## Queries for the SP_TrusteeAccess Job

The SP_TrusteeAccess Job uses the TextSearch Data Collector for the following query:

![Queries for the SP_TrusteeAccess Job](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/trusteeaccessquery.webp)

The default query is:

- Scoping – Modifies the CSV in the Job Directory. See the [Configure CSV File for the Query for the SP_TrusteeAccess Job](#configure-csv-file-for-the-query-for-the-sp_trusteeaccess-job) topic for additional information.

### Configure CSV File for the Query for the SP_TrusteeAccess Job

Follow the steps to specify trustees in the ```UserScoping.csv``` file.

__Step 1 –__ Navigate to the __Jobs__ > __SharePoint__ > __Effective Access Audits__ > __Scoping__ > __SP_TrusteeAccess__ Job and right-click on the job. Select __Explore Folder__ and the job’s directory opens.

![UserScoping.csv in the SP_TrusteeAccess Job folder in File Explorer](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/userscopingfileexplorer.webp)

__Step 2 –__ Open the ```UserScoping.csv``` file with a text editor, for example Notepad.

![UserScoping.csv file in Notepad](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/userscopingnotepad.webp)

__Step 3 –__ Enter the trustees using a ```Domain\UserName``` format. Enter one trustee per row.

__Step 4 –__ Save and close the file.

The SP_TrusteeAccess Job is now ready to import this list of trustees to scope the Effective Access Audits Job Group. After job execution, the list of specified trustees will populate the Scope table accessible under the job’s Results node.
