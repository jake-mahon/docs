# 1-FSAC System Scans Job

The 1-FSAC System Scans job is designed to collect activity events from the targeted file servers.

## Query for the 1-FSAC System Scans Job

The Activity Scan query uses the FSAA Data Collector and has been preconfigured to use the File system activity Scan category.

![Query for the 1-FSAC System Scans Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/collection/fsacsystemscansquery.png)

- Activity Scan – Scans for File System Activity

The following default configurations are commonly customized:

- Scan Server Selection page:

  - Set to __Local Server__, or local mode scans
- Activity Settings page:

  - Set scan filter for detailed activity __60__ days
  - Set filter for statistics of activity __120__ days

See the [Recommended Configuration for the File System Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/recommended.md) topic for a complete list of customizable settings. See the [Configure the Activity Scan Query](#Configure-the-Activity-Scan-Query) topic for instructions.

### Configure the Activity Scan Query

The 1-FSAC System Scans job has been preconfigured to run with the default settings with the category of File system activity Scan. Follow the steps to set any desired customizations.

__Step 1 –__ Navigate to the __FileSystem__ > __0.Collection__ > __1-FSAC System Scans__ > __Configure__ node and select the __Queries__ node.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The File System Access Auditor Data Collector Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![Applet Settings](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/collection/fsacappletsettings.png)

__Step 4 –__ The Applet Settings page applies to the applet and proxy mode scans which are selected on the Scan Server Level Page. If employing proxy servers, see the [FSAA: Applet Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/fsaa/appletsettings.md) topic for configuration instructions.

![Scan Server Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/collection/fsacscanserverselection.png)

__Step 5 –__ The Scan Server Selection page applies to the applet and proxy mode scans. Remember, each mode has different provisioning requirements. See the [FSAA: Scan Server Selection](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/fsaa/scanserverselection.md) topic for additional information.

![Activity Settings](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/collection/fsacactivitysettings.png)

__Step 6 –__ On the Activity Settings page:

- Modify the number of days detailed activity is kept
- Modify the number of days activity statistics are kept
- Modify log parsing limits

See the [FSAA: Activity Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/fsaa/activitysettings.md) topic for additional information.

__Step 7 –__ Click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

If changes were made, the 1-FSAC System Scans job is now customized.
