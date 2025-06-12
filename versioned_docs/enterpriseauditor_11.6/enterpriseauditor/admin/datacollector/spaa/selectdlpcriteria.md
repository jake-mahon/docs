# SPAA: Select DLP Criteria

The Select Criteria page is where criteria to be used for discovering sensitive data are configured. It is a wizard page for the category of Scan For Sensitive Content. This page requires the Sensitive Data Discovery Add-On to be been installed on the Enterprise Auditor Console to define the criteria and enable the Criteria Editor. If the SharePoint Agent is used, then it must also be installed on the application server that hosts the Central Administration component. See the [Sensitive Data Discovery Add-On Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/overview.md) topic for additional information.

__CAUTION:__ Users should not change scans in a way that would result in less data being returned on a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in the Tier 2 database and subsequently removed from the Tier 1 database.

![Select DLP criteria for this scan page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/selectdlpcriteria.png)

The options on the Select DLP Criteria page are:

- Use Global Criterion Selection – Check this option to inherit sensitive data criteria settings from the __Settings__ > __Sensitive Data__ node. See the [Sensitive Data](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/sensitivedata/overview.md) topic for additional information.
- Use the following selected criteria – Check this option to use the table to select which sensitive data criteria to scan for
- Select All - Click __Select All__ to enable all sensitive data criteria for scanning
- Clear All - Click __Clear All__ to remove all selections from the table
- Check the boxes next to the sensitive data criteria options to enable it to be scanned for during job execution

The table contains the following types of criteria:

__NOTE:__ Until the Sensitive Data Discovery Add-On is installed, only the headers for the System Criteria and User Criteria nodes are visible in the table.

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

  Use the Sensitive Data Criteria Editor in __Settings__ > __Sensitive Data__ to create and edit user-defined criteria. See the [Sensitive Data Discovery Add-On Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/overview.md)topic for additional information.
