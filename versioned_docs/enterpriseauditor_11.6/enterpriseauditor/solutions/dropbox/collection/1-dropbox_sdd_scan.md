# 1-Dropbox_SDD Scan Job

The 1-Dropbox_SDD Scan job collects data from the Dropbox environment on access rights, sharing policies, configurations, content and sensitive data.

## Queries for the 1-Dropbox_SDD Scan Job

The 1-Dropbox_SDD Scan job has been preconfigured to run under the default settings within the category of Scan for Sensitive Content.

![Queries for the 1-Dropbox_SDD Scan Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/dropbox/collection/sddscanquery.png)

The query for the 1-Dropbox_SDD Scan job is:

- Sensitive Data Scan – Scans Dropbox for sensitive data

### Configure the Sensitive Data Scan Query

Follow the steps to either generate the access token needed for the Connection Profile (only done prior to first execution) or to set any desired customizations.

__Step 1 –__ Navigate to the __Jobs__ > __Dropbox__ > __0.Collection__ > __1-Dropbox_SDD Scan__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__ to open the Query Properties window.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The Dropbox Access Auditor Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scoping page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/dropbox/collection/sddscopingpage.png)

__Step 4 –__ On the Scoping page, select whether to scan __All Users__ or __Limited Users__. If __Limited Users__ is selected, browse to a CSV file with one email address per row for the desired users. In the File Permissions section, select the __Collect File Level Permissions__ checkbox to collect permissions at the file level. See the [DropboxAccess: Scoping](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/scoping.md) topic for additional information.

![Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/dropbox/collection/sdddlpsettings.png)

__Step 5 –__ On theDLP Audit Settings page:

- Modify the maximum file size to be scanned
- Modify file types to be scanned
- Enable storing of discovered match hits
- Enable differential scanning

See the [DropboxAccess: DLP Audit Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/dlpauditsettings.md) topic for additional information.

![Dropbox Access Auditor Data Collector Wizard Select DLP criteria page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/dropbox/collection/sddselectdlpcriteria.png)

__Step 6 –__ On the Select DLP Criteria for This Scan page , add or remove criteria as desired.

- (Optional) Create custom criteria with the __Edit__ option. See the [Sensitive Data Criteria Editor](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/sensitivedatadiscovery/criteriaeditor/overview.md) topic for additional information.

See the [DropboxAccess: Select DLP Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/selectdlpcriteria.md) topic for additional information.

__Step 7 –__ On the Completion Page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 1-Dropbox_SDD Scan job has now been customized.
