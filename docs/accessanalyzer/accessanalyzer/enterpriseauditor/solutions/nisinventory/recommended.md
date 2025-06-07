# Recommended Configuration for the .NIS Inventory Solution

The .NIS Inventory Solution requires some configuration for the target environment. It can be run directly or scheduled.

Dependencies

This job group does not have dependencies.

Targeted Hosts

The host list assignment should be assigned under the __.NIS Inventory__ > __NIS Scan__ > __Hosts__ node. Select the custom host list containing the NIS servers or manually add the host in the __Individual hosts__ section. See the [Unix Connection Profile & Host List](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/nis/configurejob.md) topic for additional information.

Connection Profile

The Connection Profile should be assigned in the __.NIS Inventory__ > __NIS Scan__ > __Job Properties__ window on the __Connection__ tab. It is set to __Use the Default Profile__, as configured at the global settings level. However, if this is not the Connection Profile with the necessary permissions for targeting the NIS servers, select the __Select one of the following user defined profiles__ option and select the appropriate Connection Profile. See the [Unix Connection Profile & Host List](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/nis/configurejob.md) topic for additional information.

Schedule Frequency

It is recommended to schedule the .NIS Inventory job group to run once a day. If there are frequent changes within the target environment, then it can be executed more often. It is best to rerun it anytime changes might have occurred.

Run at the Solution Level

The job in the .NIS Inventory job group can be run at either the job or job group level.

Query Configuration

The solution requires the NIS domain to be configured in the __Inventory Scan__ query. Navigate to the __NIS Settings__ page of the NIS Data Collector Wizard. Optionally, modifications can be made for SID mappings within the __NIS Scan__ job. See the [NIS Scan Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/nisinventory/nis_scan.md) topic for additional information.

Analysis Configuration

The solution is best run with the default analysis configuration. However, the __Drop NIS Tables__ analysis task is deselected by default, as it is for troubleshooting purposes only.

History Retention

History retention is not supported and should be turned off.

Multi-console Support

Multi-console is not supported.

Workflow

__Step 1 –__ Configure and assign the host list and Connection Profile.

__Step 2 –__ Configure the Inventory Scan query.

__Step 3 –__ Schedule the .NIS Inventory job group to run as desired
