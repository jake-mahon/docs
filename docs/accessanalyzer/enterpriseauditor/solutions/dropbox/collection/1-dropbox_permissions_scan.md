# 1-Dropbox\_Permissions Scan Job

The 1-Dropbox\_Permissions Scan job collects data from the Dropbox environment on access rights, sharing policies, configurations, and content.

__CAUTION:__ This job should not be run if running sensitive data scans against the Dropbox Business environment.

## Queries for the 1-Dropbox\_Permissions Scan Job

The 1-Dropbox\_Permissions Scan job has been preconfigured to run with the default settings with the category of Dropbox Access.

![Queries for the 1-Dropbox_Permissions Scan Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/collection/permissionsscanquery.png)

The query for the 1-Dropbox\_Permissions Scan job is:

- Dropbox Access – Collects the data on access rights, sharing policies, configurations, and content

### Configure the Dropbox Access Query

Follow the steps to either generate the access token needed for the Connection Profile (only done prior to first execution) or to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __Dropbox__ > __0.Collection__ > __1-Dropbox\_Permissions Scan__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__ to open the Query Properties window.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The Dropbox Access Auditor Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scan Options page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/permissionsscanoptionspage.png)

__Step 4 –__ T Use the Scan Options page ito generate the access token prior to the first execution of the job group.

- Remember to copy the access token, either from the textbox or using the __Copy to Clipboard__ button, and use it in the Connection Profile assigned to the Dropbox Solution. Once the access token has been generated and copied, if no customizations are to be made, click __Cancel__ to close the Dropbox Access Auditor Data Collector wizard.
- See the [DropboxAccess: Scan Options](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/dropboxaccess/scanoptions.md) topic for full instructions on generating the access token

__Step 5 –__ If query customizations are desired, click __Next__ to continue.

![Dropbox Access Auditor Data Collector Wizard Scoping page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/permissionsscopingpage.png)

__Step 6 –__ On the Scoping page, select whether to scan __All Users__ or __Limited Users__. If __Limited Users__ is selected, browse to a CSV file with one email address per row for the desired users. In the File Permissions section, select the __Collect File Level Permissions__ checkbox to collect permissions at the file level. When finished with this page, click __Next__.

__Step 7 –__ On the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 1-Dropbox\_Permissions Scan job has now been customized.
