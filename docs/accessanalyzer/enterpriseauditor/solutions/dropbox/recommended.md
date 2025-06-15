# Recommended Configurations for the Dropbox Solution

The Dropbox Solution requires the host list to be assigned and the Connection Profile configured before job execution. Once these are assigned to the job group, it can be run directly or scheduled.

Targeted Hosts

The Dropbox solution has been configured to inherit the host list assignment from the collection job group level.

The host list assignment should be assigned under the __Dropbox__ > __0.Collection__ > __Settings__ > __Host List Assignment__ node. Select the __Local host__ option.

Connection Profile

The DropboxAccess Data Collector requires a specific set of permissions to generate an access token which is used to configure the Connection Profile for Dropbox. The access token is generated in the Dropbox Access Auditor Data Collector Wizard on the Scan Options page (accessed through the __1-Dropbox_Permissions Scan__ job’s __Queries__ node). The access token only needs to be generated once, prior to running the job group for the first time. Then it is used as the credential in the Connection Profile. See the [DropboxAccess: Scan Options](../../admin/datacollector/dropboxaccess/scanoptions.md) topic for additional information.

The Dropbox solution has been configured to inherit the Connection Profile from the collection job group level. The Connection Profile should be assigned under the __Dropbox__ > __0.Collection__ > __Settings__ > __Connection__ node. It is set to __Use the Default Profile__, as configured at the global settings level. However, since this may not be the Connection Profile with the necessary permissions for Dropbox, select the __Select one of the following user defined profiles__ option and select the appropriate Connection Profile from the drop-down menu. See the [Custom Dropbox Connection Profile & Host List](../../admin/datacollector/dropboxaccess/configurejob.md) topic for additional information on configuring the Dropbox credential. The Dropbox bulk import jobs requires the same connection profile as used in the corresponding Dropbox scan jobs

See the [Connection](../../admin/settings/connection/overview.md) topic for additional information on creating Connection Profiles.

Schedule Frequency

The Dropbox solution can be scheduled to run as desired.

History Retention

Not supported and should be turned off.

Multi Console Support

Not supported.

Run Order

The 0.Collection jobs must be run first and in order. Run the __1-Dropbox_Permissions Scan__ job and then the __2-Dropbox_Permissions Bulk Import__ job. For the sensitive data jobs, run the __1-Dropbox_SDD Scan__ job and then the __2-Dropbox_SDD Bulk Import__ job.

___RECOMMENDED:___ When running the sensitive data jobs, disable the permissions jobs, and vice versa.

After running the 0.Collection jobs, the other Dropbox solution job groups can be run in any order. Best practice is to run at the solution level.

Query Configuration

This solution can be run with the default query configurations. The Scoping page of the Dropbox Access Auditor Data Collector Wizard can be customized to target specific user accounts. See the [DropboxAccess: Scoping](../../admin/datacollector/dropboxaccess/scoping.md) topic for additional information.

Analysis Configuration

This solution should be run with the default analysis configuration.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this solution.

Though the analysis tasks should not be deselected the time frame used to define staleness can be modified:

- Stale content set to default of 365 days

  - Configured within the __4.Content__ > __Dropbox_Content__ job
  - __Determines stale data by owner__ analysis task
  - See the [4.Content > Dropbox_Content Job](dropbox_content.md) topic for additional information

Additional Consideration

The jobs contained in the solution use custom SQL scripts to render views on collected data. SQL views are used to populate report element tables and graphs. Changing or modifying the group, job, or table names will result in no data displayed within the Access Information Center.

Workflow

The following is the recommended workflow:

__Step 1 –__ Run the __1-Dropbox_Permissions Scan__ job (for sensitive data, run the __1-Dropbox_SDD Scan__ job).

__Step 2 –__ Run the __2-Dropbox_Permissions Bulk Import__ job (for sensitive data, run the __2-Dropbox_SDD Bulk Import__ job).

__Step 3 –__ Run the desired corresponding analysis and reporting sub-job groups.

_Remember,_ prior to running the Dropbox solution for the first time, it is necessary to generate an access token to be used in the Connection Profile. This only needs to be done once. See the [Configure the Dropbox Access Query](collection/1-dropbox_permissions_scan.md#configure-the-dropbox-access-query) topic for additional information.
