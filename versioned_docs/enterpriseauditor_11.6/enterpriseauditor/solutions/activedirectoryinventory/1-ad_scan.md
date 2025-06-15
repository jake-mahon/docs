# 1-AD_Scan Job

The 1-AD_Scan Job collects data from Active Directory. In most environments, this job requires no additional customizations before running it. Optionally, the job can be configured to scope scan options and to collect custom attributes. For enable SSL encryption for communication with Active Directory, see the [Enable SSL Option](#enable-ssloption) topic for additional information.

## Queries for the 1-AD Scan Job

The 1-AD_Scan Job uses the ADInventory Data Collector for the following query:

![Queries for the 1-AD Scan Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scanqueries.png)

- AD Inventory – Targets a domain controller to collect inventory data for user, group, and computer objects

  - This query can be modified. See the [Customize the 1-AD_Scan Query](#customize-the-1-ad_scan-query) topic for additional information.

### Customize the 1-AD_Scan Query

The 1-AD_Scan Job has been preconfigured to run with the default settings with the category of Scan Active Directory. Follow the steps to set any desired customizations to scan options or to collect custom attributes.

__Step 1 –__ Navigate to the __.Active Directory Inventory__ > __1-AD_Scan__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The Active Directory Inventory DC Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![Active Directory Inventory DC Wizard Options page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scandcwizardoptions.png)

__Step 4 –__ (Optional) On the Options page, you can:

- Enable encrypted communication with Active Directory (SSL)
- Configure the differential scan settings using the __Collect only updates since last scan__ settings

See the [ADInventory: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/options.md) topic for more information.

![Active Directory Inventory DC Wizard Custom Attributes page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scandcwizardcustomattributes.png)

__Step 5 –__ (Optional) On the Custom Attributes page, add any desired custom attributes to be used in the Active Directory scan. See the [ADInventory: Custom Attributes](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributes.md) topic for additional information.

__Step 6 –__ Navigate to the Summary page. Click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

__NOTE:__ In order for the Access Information Center to populate NFS permissions within File System reports, the .Active Directory Inventory Job Group must be configured to collect the __uid__ and __uidNumber__ attributes for Users. See the [NFS Permissions for the AIC ](#nfs-permissions-for-the-aic) topic for additional information.

The 1-AD_Scan Job is now ready to run with the customized settings. If any custom attributes are added to the data collection, the __Create Extended Attributes View__ analysis task can be enabled in order to have visibility into the collected data.

## Analysis Tasks for the 1-AD_Scan Job

View the analysis tasks by navigating to the __.Active Directory Inventory__ > __1-AD_Scan__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the 1-AD_Scan Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scananalysis.png)

The following analysis tasks are selected by default:

- Import functions – Imports effective group membership function into the database
- Create Extended Attributes View – Creates the SA_ADInventory_ExtendedAttributesView for Custom Attributes that have been added to the query
- Summarize Domains – Creates the SA_ADInventory_Report_DomainSummary table
- Summarize Stats – Creates the SA_ADInventory_Summary table

The following analysis tasks never need to be selected as they are only needed to restore views that have been accidentally hidden:

- Bring User View To Console – Restores the SA_ADInventory_UsersView to be visible within the Enterprise Auditor Console if it is hidden
- Bring Group Members View To Console – Restores the SA_ADInventory_GroupMembersView to be visible within the Enterprise Auditor Console if it is hidden
- Bring Group View To Console – Restores the SA_ADInventory_GroupsView to be visible within the Enterprise Auditor Console if it is hidden
- Bring Computers View to Console – Restores the SA_ADInventory_ComputersView to be visible within the Enterprise Auditor Console if it is hidden
- Remove ADI Stored Procedures – Removes the built-in ADI stored procedures

In addition to the tables and views explained in the [Standard Reference Tables & Views for the ADInventory Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/standardtables.md) topic, the 1-AD_Scan Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Active Directory Summary | This report provides a summary of all audited domains and objects. | None | This report is comprised of four elements:   - Table – Displays general statistics in the Users, Groups, and Computers in All Audited Domains - Pie Chart – Displays Principals by Object Class - Pie Chart – Displays Principals by Audited Domain - Table – Displays detailed statistical information for each of the AD objects |

## NFS Permissions for the AIC

In order for the Access Information Center to populate NFS resources within all File System permissions and resource audit reports, the .Active Directory Inventory Job Group must be configured to collect the following custom attributes for Users:

- uid
- uidNumber

Follow the steps to add the custom attributes.

__Step 1 –__ Navigate to the Active Directory Inventory DC Wizard for the AD Inventory Query within the 1-AD_Scan Job.

![Active Directory Inventory DC Wizard Options page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scandcwizardoptionsnfs.png)

__Step 2 –__ Navigate to the Options page. Ensure the __Collect only updates since last scan__ option is deselected.

__NOTE:__ Whenever query configurations are modified, it is necessary to do a full scan. After the first full scan, differential scanning can be re-enabled.

![Active Directory Inventory DC Wizard Custom Attributes page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectoryinventory/scandcwizardcustomattributesnfs.png)

__Step 3 –__ Use the __Next__ button to navigate to the Custom Attributes page. Add both __uid__ and __uidNumber__ attributes to the existing list of custom attributes. See the [ADInventory: Custom Attributes](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributes.md) topic for additional information.

- __uid__ attribute:

  - Domain Filter – \*
  - Object Class – User
  - Attribute Name – uid
- __uidNumber__ attribute:

  - Domain Filter – \*
  - Object Class – User
  - Attribute Name – uidNumber

__Step 4 –__ Use the __Next__ button to navigate to the Summary page and click __Finish__. The Active Directory Inventory DC Wizard closes. Click __OK__ to close the Query Properties window.

__Step 5 –__ Run the .Active Directory Inventory Job Group either manually or through a scheduled task.

The .Active Directory Inventory Job Group is now collecting attributes required for NFS data to be visible within the Access Information Center.

_Remember,_  it is necessary to re-enable differential scanning after Step 5 if desired.

See the Resource Audit topics in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

## Enable SSL Option

Follow the steps to enable SSL encryption for communications with Active Directory:

__Step 1 –__ Navigate to the __1-AD_Scan > Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the query and click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Go to the Options page and select the __Encrypt communication with Active Directory (SSL)__ checkbox. Click __Next__.

__Step 4 –__ Navigate to the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

The job will now use SSL encryption to query Active Directory.
