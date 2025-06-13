# 1-AAD\_Scan Job

The __1-AAD\_Scan__ Job is responsible for collecting data from Microsoft Entra ID. This job requires no additional customizations before being used, but can be scoped to disable collecting sign-in activity with the scan.

## Queries for the 1-AAD\_Scan Job

The 1-AAD\_Scan job uses the AzureADInventory Data Collector for the following query:

![Query Selection page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraidinventory/scanqueryselection.png)

- AAD Inventory – Targets Microsoft Entra tenants to collect inventory data for user group objects
  - _(Optional)_ This query can be modified to specify scan options and to collect custom attributes. See the [Configure the 1-AAD\_Scan Query](#Configure-the-1-AAD_Scan-Query) topic for additional information.

### Configure the 1-AAD\_Scan Query

The 1-AAD\_Scan Job is configured to run with the default settings with the category of Scan Entra ID. Follow the steps to customize configurations.

__Step 1 –__ Navigate to the __.Entra ID Inventory__ > __1-AAD\_Scan__ > __Configure__ node and select __Queries__.

![Query Properties button on Query Selection page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraidinventory/scanqueryselectionproperties.png)

__Step 2 –__ In the Query Selection view, click on __Query Properties__ to open the Query Properties window.

![Query Properties window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraidinventory/scanqueryproperties.png)

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__ to open the Entra ID Inventory DC Wizard.

![Entra ID Inventory DC Wizard Options page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scandcwizardoptions.png)

__Step 4 –__ On the Options page, select the different Scan Options as needed:

- Collect only updates since the last scan – Enables differential scanning.

  __NOTE:__ Enabling the Collect Open Extensions option on the Custom Attributes page overrides this function.
- Collect sign-in activity with scan – Required to collect the LastLogonTimestamp attribute of user objects. A message will alert users that deselecting this option will disable this function.
- Collect Directory Audit Events – Collect Microsoft Entra ID audit logs

![Entra ID Inventory DC Wizard Custom Attributes page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scandcwizardcustomattributes.png)

__Step 5 –__ On the Custom Attributes page, click __Add__ or __Import__ to add or import custom attributes.

- Select __Collect Open Extensions__ to enable the data collector to collect all extension attributes in Microsoft Entra ID. Enabling this option will increase scan times.

  __NOTE:__ Enabling this option overrides the differential scan setting and will direct the data controller to run a full scan every time the job is run.
- See the [AzureADInventory Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/azureadinventory/overview.md) topic for additional information on adding and importing custom attributes.

__Step 6 –__ Navigate to the Summary page. Click __Finish__ to save changes or click __Cancel__ to exit without saving. Then click __OK__ to close the Query Properties window.

The 1-AAD\_Scan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-AAD\_Scan Job

Navigate to the __.Entra ID Inventory__ > __1-AAD\_Scan__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for 1-AAD_Scan Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraidinventory/scananalysistasks.png)

The default analysis tasks are:

- Import functions – Imports effective group membership function into the database
- Bring Users View to Console – Enables the SA\_AzureADInventory\_UsersView to be accessible under the job’s Results node
- Bring Groups View to Console – Enables the SA\_AzureADInventory\_GroupsView to be accessible under the job’s Results node
- Bring Group Members View to Console – Enables the SA\_AzureADInventory\_GroupMemberssView to be accessible under the job’s Results node
- Summarize Domains – Creates interim processing tables in the database for use by downstream analysis and report generation
- Summarize Stats – Creates interim processing tables in the database for use by downstream analysis and report generation

In addition to the tables and views listed in the [Standard Reference Tables & Views for the AzureADInventory Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/azureadinventory/standardtables.md) section, the 1-AAD\_Scan Job produces the following preconfigured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Entra ID Summary | This report provides a summary of all audited domains and objects. | None | This report has two elements:   - Table – Provides details on general statistics on the Users and groups found with each tenant scanned - Table – Provides details on statistical information for each of these Entra ID objects |
