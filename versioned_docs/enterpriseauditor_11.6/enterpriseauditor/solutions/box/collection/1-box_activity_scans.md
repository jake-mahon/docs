# 1-Box_Activity Scans Job

The 1-Box_Activity Scans Job collects the data which will be further analyzed in order to provide visibility into user activity events within Box.

## Queries for the 1-Box_Activity Scans Job

The Scan Query uses the Box Data Collector to target all Box hosts and has been preconfigured to use the Scan Box Permissions Category.

![Queries for the 1-Box_Activity Scans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activityqueries.png)

The 1-Box_Activity Scans Job has the following queries:

- Activity Scan – Collects activity data which will be further analyzed in order to provide visibility into user activity events within Box.

Prior to the first execution, it is necessary to authenticate to the targeted Box environment if this has not already been done when configuring the 1-Box_Access Scans Job. This is done on the Authenticate page of the Activity Scan query. Additionally, the following default configurations are commonly customized:

- Exclusions page:

  - Not scoped
- Additional Scoping page:

  - Not scoped

See the [Configure the 1-Box_Activity Scans Job](#configure-the-1-box_activity-scans-job) section for instructions.

### Configure the 1-Box_Activity Scans Job

The 1-Box_Activity Scans Job contains the Activity Scan Query. Follow the steps to configure the query.

__Step 1 –__ Navigate to the __Box__ > __0.Collection__ > __1-Box_Activity Scans__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the Scan Query and click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the Data Source tab, and click __Configure__. The Box Data Collector Wizard opens.

![Box Data Collector Wizard Exclusions page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activityexclusions.png)

__Step 4 –__ On the Exclusions page:

- Add folders to be excluded
- Add folders to be included (scope scan to only these folders)

![Box Data Collector Wizard Additional Scoping page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activityadditionalscoping.png)

__Step 5 –__ On the Additional Scoping page:

- Optionally, select this option to limit the depth of the scan across the targeted Box account

![Box Data Collector Wizard Scope by User page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activityuserscope.png)

__Step 6 –__ On the Scope By User Page:

- Optionally, limit the scope of the scan to specified users by providing a CSV file

![Box Data Collector Wizard Activity Timespan Scope page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activitytimespanscope.png)

__Step 7 –__ On the Activity Timespan Scope page:

- Collect activity data within a Relative Timespan
- Collect activity data within an Absolute Timespan

![Box Data Collector Wizard Activity Operation Scope page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activityoperationscope.png)

__Step 8 –__ On the Activity Operation Scope page:

- Select Box enterprise event operations to collect

![Box Data Collector Wizard Authenticate page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/collection/activityauthenticate.png)

__Step 9 –__ The Authenticate page is where the connection to the target Box environment is configured. Click __Authorize__ to launch the BoxLogin window and generate an authorization code. This code allows Enterprise Auditor to report on the Box Enterprise.

__NOTE:__  Authentication to the target Box environment only needs to be completed once, prior to the first scan and only in one of the scan jobs.

__Step 10 –__ Navigate to the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

The 1-Box_Activity Scans Job will execute according to the connection settings configuration.
